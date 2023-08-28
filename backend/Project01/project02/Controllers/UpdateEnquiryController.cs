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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [JwtAuthentication]
    public class UpdateEnquiryController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        // GET: api/UpdateEnquiry
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UpdateEnquiry/5
        public enquiry Get(int id)
        {
            return db.enquiries.Find(id);
        }

        // POST: api/UpdateEnquiry
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/UpdateEnquiry/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/UpdateEnquiry/5
        public void Delete(int id)
        {
        }
    }
}
