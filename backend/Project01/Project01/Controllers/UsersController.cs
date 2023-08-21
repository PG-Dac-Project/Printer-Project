using Project01.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project01.Controllers
{

    public class UsersController : ApiController
    {
        Project_PrinterEntities userdb = new Project_PrinterEntities(); 
        public List<user> Get() 
        {
            return userdb.Set<user>().ToList();
        }
    }
}
