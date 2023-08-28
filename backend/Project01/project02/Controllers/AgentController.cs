using project02.Filters;
using project02.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Web.Http;
using System.Web.Http.Cors;

namespace project02.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AgentController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        [JwtAuthentication]
        public HttpResponseMessage Get()
        {
            //var data = (from us in db.users
            //            join th in db.technicals
            //            on us.uid equals th.uid
            //            join en in db.enquiries
            //            on th.eid equals en.eid 
            //            join pd in db.products
            //            on en.pid equals pd.pid

            var data = (from en in db.enquiries
                        join us in db.users
                        on en.uid equals us.uid into enqUsers
                        from enqUser in enqUsers.DefaultIfEmpty()
                        join pd in db.products
                        on en.pid equals pd.pid into enqProducts
                        from enqProduct in enqProducts.DefaultIfEmpty()
                        join th in db.technicals
                        on en.eid equals th.eid into enqTechnicals
                        from enqTechnical in enqTechnicals.DefaultIfEmpty()
                        join us in db.users
                        on enqTechnical.uid equals us.uid into techUsers
                        from techUser in techUsers.DefaultIfEmpty()
                        select new
                        {
                            en.eid,
                            en.uid, //cust id
                                    // cust name
                            enqProduct.pserial_no,
                            enqProduct.pmodel_name,
                            en.description,
                            en.enquiry_date,
                            techid = enqTechnical == null ? 0 : enqTechnical.tid,
                            techName = techUser.fname,
                            enqUser.fname,
                            en.completion_date,
                            en.enquiry_status
                        }).ToList();


            return Request.CreateResponse(HttpStatusCode.OK, data);

         }
        // update status
        public HttpResponseMessage Post([FromBody] enquiry eq)
        {
           enquiry en = (from e in db.enquiries
                         where e.eid == eq.eid
                          select e).First();
           if(en != null)
            {
                en.completion_date= DateTime.Now;
                en.enquiry_status = eq.enquiry_status;
                db.enquiries.AddOrUpdate(en);
                db.SaveChanges();
            }
            return Request.CreateResponse(HttpStatusCode.OK);
        }

    }
}
