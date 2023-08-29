using project02.Filters;
using project02.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace project02.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    
    public class UsersController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();

        [JwtAuthentication]
        public user Get(int uid)
        {
            var list = (from usr in db.users
                        where usr.uid == uid
                               select usr).First();
            return list; 
        }

        #region Login 
        [AllowAnonymous]
        public IHttpActionResult Post([FromBody] user us)
        {
            List<object> list = new List<object> { };
            string key = null;
            user detail = (from usr in db.users
                           where usr.email == us.email &&
                           usr.passwd == us.passwd
                           select usr).First();
            if (detail != null)
            {
                list.Add(detail);

                key = JwtManager.GenerateToken(us.email);
                list.Add(key);
                return Ok(list);
            }

            return Unauthorized();

        }
        #endregion

    }
}
