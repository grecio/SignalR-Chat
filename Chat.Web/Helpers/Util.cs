using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace Chat.Web.Helpers
{
    public static class Util
    {

        public static string OnlyNumbers(this string str)
        {
            var reg = new Regex(@"[^\d]");

            return reg.Replace(str, "");
        }
    }
}