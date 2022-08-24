using CrudOperations.CommonLayer.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.RepositoryLayer
{
    public interface ICrudOperationRL
    {
        public Task<CreateRecordResponse> CreateRecord(CreateRecordRequest request);

        public Task<ReadRecordResponse> ReadRecord(ReadRecordRequest request);

        public Task<UpdateRecordResponse> UpdateRecord(UpdateRecordRequest request );

        public Task<DeleteRecordResponse> DeleteRecord(DeleteRecordRequest request);
    }
}
