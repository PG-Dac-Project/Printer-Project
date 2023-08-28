using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using project02.Filters;
using project02.Models;

namespace project02.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    [JwtAuthentication]
    public class ProductController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        // GET: api/Product
        public List<product> Get()
        {

            return db.products.ToList();
        }

        // GET: api/Product/5
        public IQueryable<object> Get(int id)
        {
            var q = (from pd in db.products
                     join en in db.enquiries on pd.pid equals en.pid
                     where en.uid == id
                     orderby en.eid
                     select new
                     {
                         en.pid,
                         pd.pmodel_name,
                         pd.pserial_no  
                     });
            var d=q.Distinct();
      //     var s= q.GroupBy(test => test.pid)
      //.Select(grp => grp.First());
            return d;
        }

        // POST: api/Product
        public int Post([FromBody]product value)
        {
            try
            {
                var data = (from pd in db.products
                            where pd.pserial_no == value.pserial_no
                            select pd.pserial_no).First();
                if (data != null)
                {
                    return 0;
                }
            }
            catch (InvalidOperationException)
            {
                
            }
           
            db.products.Add(value);
            db.SaveChanges();
            return 1;
        }

        // PUT: api/Product/5
        public int Put(int id, [FromBody]product value)
        {
            
           product pd=db.products.Find(id);
            pd.pmodel_name = value.pmodel_name;
            pd.purchase_date = value.purchase_date;
            pd.pserial_no = value.pserial_no;
            db.products.AddOrUpdate(pd);
            db.SaveChanges();
            return 1;
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
           product pd = db.products.Find(id);
            db.products.Remove(pd);
            db.SaveChanges();
        }
    }
}
