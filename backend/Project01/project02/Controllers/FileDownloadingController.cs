using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace project02.Controllers
{
    public class FileDownlodingController : ApiController
    {
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //0 Action Method
        [HttpGet]
        [Route("api/FileDownloading/Download/{name}")]
        public HttpResponseMessage Download(string name)
        {
            var result = new HttpResponseMessage(HttpStatusCode.OK);

            //1. get file bytes
            var fileName = name + ".exe";
            var filePath = HttpContext.Current.Server.MapPath($"~/App_Data/{fileName}");
            var fileBytes = File.ReadAllBytes(filePath);

            //2. Add bytes to memory stream
            var fileMemStream = new MemoryStream(fileBytes);

            //3. Add memory Stream to response
            result.Content = new StreamContent(fileMemStream);

            //4. bulild response headers
            var headers = result.Content.Headers;
            headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            headers.ContentDisposition.FileName = fileName;
            headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            headers.ContentLength = fileMemStream.Length;

            return result;
        }
    }
}
