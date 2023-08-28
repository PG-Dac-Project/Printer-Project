using project02.Filters;
using project02.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace project02.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [JwtAuthentication]
    public class EnquiryController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        // GET: api/Enquiry
        public List<enquiry> Get()
        {
            return db.enquiries.ToList();
        }
        //GET: api/Enquiry/id
        public IQueryable<object> Get(int id)
        {
            var q = (from pd in db.products
                     join en in db.enquiries on pd.pid equals en.pid
                     where en.uid== id
                     orderby en.eid
                     select new
                     {
                         en.eid,
                         pd.pmodel_name,
                         pd.pserial_no,
                         en.description,
                         en.enquiry_date,
                         en.completion_date,
                         en.enquiry_status
                     });
            return q;
        }

       

        // POST: api/Enquiry
        public int Post([FromBody]enquiry value)
        {
            enquiry en = db.enquiries.Find(value.eid);
            en.description = value.description;
            db.enquiries.AddOrUpdate(en);
            //try
            //{
                db.SaveChanges();
            //}
            //catch (DbEntityValidationException ex)
            //{
            //    foreach (var entityValidationErrors in ex.EntityValidationErrors)
            //    {
            //        foreach (var validationError in entityValidationErrors.ValidationErrors)
            //        {
            //            Console.WriteLine("Property: " + validationError.PropertyName + " Error: " + validationError.ErrorMessage);
            //        }
            //    }
            //}
            return 1;
        }

        // PUT: api/Enquiry/5
        public int Put( [FromBody]enquiry value, string id )
        {
            var val=0;
            try
            {
                 val = (from p in db.products
                           where p.pserial_no == id
                           select p.pid).First();
               
            }
            catch (InvalidOperationException)
            {
                return 0;

            }
            enquiry en=new enquiry();
            en.enquiry_date = DateTime.Now;
            en.completion_date = value.completion_date;
            en.description = value.description;
            en.uid = value.uid;
            en.pid =val;
            en.enquiry_status = "Pending";
            db.enquiries.Add(en);
            db.SaveChanges();
            return 1;
            //try
            //{
            //    entities.SaveChanges();
            //}
            //catch (DbEntityValidationException ex)
            //{
            //    foreach (var entityValidationErrors in ex.EntityValidationErrors)
            //    {
            //        foreach (var validationError in entityValidationErrors.ValidationErrors)
            //        {
            //           Console.WriteLine("Property: " + validationError.PropertyName + " Error: " + validationError.ErrorMessage);
            //        }
            //    }
            //}

        }

        // DELETE: api/Enquiry/5
        public void Delete(int id)
        {
            enquiry enq = db.enquiries.Find(id);
            db.enquiries.Remove(enq);
            db.SaveChanges() ;
        }
    }
}
