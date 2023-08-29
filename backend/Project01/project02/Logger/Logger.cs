using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;

namespace project02.Logger
{
    public class Logger
    {
        private static Logger logger = new Logger();
        string filePath = null;
        FileStream fileStream = null;
        StreamWriter fileWriter = null;
        private Logger()
        {
            filePath = ConfigurationManager.AppSettings["LogFile"].ToString();
        }
        public static Logger CurrentLog { get { return logger; } }
        public void Log(string message)
        {
            if (File.Exists(filePath))
            {
                fileStream = new FileStream(filePath, FileMode.Append, FileAccess.Write);
            }
            else
            {
                fileStream = new FileStream(filePath, FileMode.OpenOrCreate, FileAccess.Write);
            }
            fileWriter = new StreamWriter(fileStream);
            fileWriter.WriteLine("Logged At ::{0}:::{1}", DateTime.Now.ToString(), message);
            fileWriter.Close();
            fileStream.Close();
            fileStream = null;
            fileWriter = null;
        }
    }
}