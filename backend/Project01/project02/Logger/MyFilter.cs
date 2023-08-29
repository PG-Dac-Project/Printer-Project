using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace project02.Logger
{
    public class MyFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            string controllerName = actionContext.ActionDescriptor.ControllerDescriptor.ControllerName;
            string actionName = actionContext.ActionDescriptor.ActionName;
            string user = HttpContext.Current.Session["keyUser"].ToString();
            string message = string.Format("User::{0} controller:::{1} and ActionMethod::{2} is executed", controllerName, actionName);
            Logger.CurrentLog.Log(message);

        }


    }
}