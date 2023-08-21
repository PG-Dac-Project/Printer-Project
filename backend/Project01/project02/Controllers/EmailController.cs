
using MailKit.Net.Smtp;
using MimeKit;
using MailKit;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;

using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Cors;
using Org.BouncyCastle.Security;
using project02.Models;
using Newtonsoft.Json;

namespace project02.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class EmailController : ApiController
    {
        Project_PrinterEntities db = new Project_PrinterEntities();
        //send email
        public static string otp = null;
        
        public int  Get(string email)
        {
            

            var usr =(from obj in db.users.ToList()
             where obj.email == email
             select obj).First();

            if(usr != null) {

                Random rnd = new Random();
                otp = rnd.Next(1000, 9999).ToString();

                MimeMessage message = new MimeMessage();
                message.From.Add(new MailboxAddress("Manager", "nishantmukta2000@gmail.com"));
                message.To.Add(MailboxAddress.Parse(email));
                message.Subject = "Verification code from Printer Support Services!!";
                message.Body = new TextPart("plain")
                {
                    Text = String.Format(@"Please use the verification code below to sign in.
{0}
If you didn’t request this, you can ignore this email.
Thanks,
The Printer Support Service team", otp)

                };

                string emailAddress = "nishantmukta2000@gmail.com";
                string password = "wsptsqvrymzljden";

                SmtpClient client = new SmtpClient();
                try
                {
                    client.Connect("smtp.gmail.com", 465, true);
                    client.Authenticate(emailAddress, password);
                    client.Send(message);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();

                }
            }//end if

            return 1;
        }
        [HttpPost]
        public int Post([FromBody]VerifyOtp obj)
        {
            if (obj.Otp.Equals(otp)) {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    }
}
