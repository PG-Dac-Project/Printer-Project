using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.Results;

namespace project02.CustomExceptionHandler
{
    public class CustomExceptionHandler : ExceptionHandler
    {
        public override async Task HandleAsync(ExceptionHandlerContext context, CancellationToken cancellationToken)
        {
            HttpStatusCode statusCode = HttpStatusCode.InternalServerError;
            string errMsg = string.Empty;
            if (context.Exception != null)
            {
                Exception filtredException = context.Exception;
                if (filtredException.GetType() == typeof(NullReferenceException) || filtredException.GetType() == typeof(ArgumentNullException))
                {
                    statusCode = HttpStatusCode.NotFound;
                    errMsg = "Requested Data is not found";
                }

                //else if (filtredException.GetType() == typeof() || filtredException.GetType() == typeof(ArgumentNullException))
                // {
                //     statusCode = HttpStatusCode.NotFound;
                //     errMsg = "Requested Data is not found";
                // }
                else
                {
                    statusCode = HttpStatusCode.InternalServerError;
                    errMsg = "Application is not process the request at the moment";
                }
            }
            //final result
            var response = context.Request.CreateResponse(statusCode, errMsg);
            response.Headers.Add("X-ERROR", "From Exception Handler");
            context.Result = new ResponseMessageResult(response);
            await base.HandleAsync(context, cancellationToken);
        }
    }
}