using project02.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
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
    
    public class RestPassController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        public int Post([FromBody] user obj)
        {
            user usr = (from u in db.users
                       where u.email == obj.email.ToString()
                       select u).First();
            usr.passwd = obj.passwd.ToString();
            db.users.AddOrUpdate(usr);
            //db.SaveChanges();

            try
            {
                db.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                foreach (var eu in ex.EntityValidationErrors)
                {
                    foreach (var u in eu.ValidationErrors)
                    {
                        Console.WriteLine("prop:" + u.PropertyName + "Error:" + u.ErrorMessage);
                    }
                }
            }
            return 1;
        }
    }
}
