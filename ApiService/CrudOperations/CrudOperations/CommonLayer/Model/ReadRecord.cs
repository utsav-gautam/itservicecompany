using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.CommonLayer.Model
{
    public class ReadRecordResponse
    {
        public bool IsSuccess { get; set; }

        public string Message { get; set; }

        public ReadRecordData readRecordData{get; set;}
    }

    public class ReadRecordRequest
    {
        public string UserName { get; set; }
        public string UserPasssword { get; set; }
    }
    public class ReadRecordData
{
    public string Username { get; set; }

    public string UserPassword { get; set; }
}
}
