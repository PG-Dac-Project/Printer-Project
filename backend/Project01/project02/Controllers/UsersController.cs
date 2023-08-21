﻿using project02.Models;
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
        
        public List<user> Get()
        {
            return db.Set<user>().ToList(); 
        }
        
        public user Post([FromBody]user us)
        {
            user detail = (from usr in db.Set<user>().ToList()    
                         where usr.email == us.email &&
                         usr.passwd == us.passwd
                         select usr).First();
 
            return detail;
        }
        
    }
}
