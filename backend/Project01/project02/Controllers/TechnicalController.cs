using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Services.Description;
using project02.Models;

namespace project02.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TechnicalController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        public IQueryable<object> Get(int id) 
        {
              var data = from tc in db.technicals
                           join en in db.enquiries
                           on tc.eid equals en.eid into tenq
                           from te in tenq.DefaultIfEmpty()
                           join u in db.users
                           on te.uid equals u.uid into tecnicaluser
                           from tecnical in tecnicaluser.DefaultIfEmpty()
                           where tc.uid == id
                           
                           select new {
                               tc.eid,
                               tecnical.fname,
                               te.enquiry_date,
                               te.completion_date,
                               te.enquiry_status,
                               te.description
                           };
          return data;
            
        }
    }
}
