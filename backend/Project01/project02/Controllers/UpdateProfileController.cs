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
    public class UpdateProfileController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();

        [JwtAuthentication]
        public IHttpActionResult Post([FromBody] user us)
        {
            user u = (from usr in db.users
                     where usr.uid == us.uid
                     select usr).First();
            u.email = us.email;
            u.mobile = us.mobile;
            u.fname = us.fname;
            u.lname = us.lname;
            u.pincode = us.pincode;
            u.role = us.role;
            u.city = us.city;
            u.area = us.area;
            u.passwd = us.passwd;

            try
            {
                db.users.AddOrUpdate(u);
                db.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
