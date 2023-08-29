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
    public class UpdateController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        // GET: api/Update
        [HttpPost]
        [Route("api/Update/Warrenty")]
        public int Warrenty([FromBody] product value)
        {

            DateTime date = value.purchase_date;
            var warrentyDate = DateTime.Now - date;
            int day = warrentyDate.Days;
            if (day <= 365)
            {
                return 1;
            }
            else
            {
                return 0;
            }

        }

        // GET: api/Update/5
        public product Get(int id)
        {
            product pd = db.products.Find(id);
            return pd;
        }

        // POST: api/Update
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Update/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Update/5
        public void Delete(int id)
        {
        }
    }
}
