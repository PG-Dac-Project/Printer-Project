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
    public class RegisterController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        public int Post([FromBody] user us)
        {
          
            db.users.AddOrUpdate(us);   
            int s = db.SaveChanges();
            return s;

        }
    }
}
