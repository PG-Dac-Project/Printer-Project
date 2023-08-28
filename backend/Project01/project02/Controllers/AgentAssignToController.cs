using project02.Filters;
using project02.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace project02.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [JwtAuthentication]
    public class AgentAssignToController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        
        public HttpResponseMessage Get()
        {
            List<user> list =    (from p in db.users
                where p.role == "Technical"
                select p).ToList();
            return Request.CreateResponse(HttpStatusCode.OK, list);
        }
        public HttpResponseMessage Post([FromBody] technical th)
        {
            technical technical = new technical();
            technical.eid = Convert.ToInt32(th.eid);
            technical.uid = Convert.ToInt32(th.uid); // technical  id from users table
            
            db.technicals.Add(technical);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}
