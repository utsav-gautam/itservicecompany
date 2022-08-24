using CrudOperations.CommonLayer.Model;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperations.RepositoryLayer
{


    public class CrudOperationRL : ICrudOperationRL
    {
        public readonly IConfiguration _configuration;
        public readonly SqlConnection _sqlConnection;

        public CrudOperationRL(IConfiguration configuration)
        {
            _configuration = configuration;
            _sqlConnection = new SqlConnection(_configuration["ConnectionStrings:DBSettingConnection"]);
        }
        public async Task<CreateRecordResponse> CreateRecord(CreateRecordRequest request)
        {
            CreateRecordResponse response = new CreateRecordResponse();
            response.IsSuccess = true;
            response.Message = "Success";

            try
            {
                String SqlQuery = "Insert Into CustomerRequest (CustomerName,CustomerMobile,CustomerEmail,CustomerCompany,CustomerRequirement) Values(@CustomerName,@CustomerMobile,@CustomerEmail,@CustomerCompany,@CustomerRequirement)";
                using (SqlCommand sqlCommand = new SqlCommand(SqlQuery, _sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CustomerName", request.CustomerName);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CustomerMobile", request.CustomerMobile);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CustomerEmail", request.CustomerEmail);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CustomerCompany", request.CustomerCompany);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@CustomerRequirement", request.CustomerRequirement);
                    _sqlConnection.Open();

                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if (status <= 0)
                    {
                        response.IsSuccess = false;
                        response.Message = "Something Went Wrong";
                    }
                }

            }catch(Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }

            return response;
            
        }

        public async Task<DeleteRecordResponse> DeleteRecord(DeleteRecordRequest request)
        {
            DeleteRecordResponse response = new DeleteRecordResponse();
            response.IsSuccess = true;
            response.Message = "Success";
            try
            {
                string SqlQuery = "Delete from CrudOperationTable where Id=@Id";

                    using (SqlCommand sqlCommand = new SqlCommand(SqlQuery, _sqlConnection))
                    {
                        sqlCommand.CommandType = System.Data.CommandType.Text;
                        sqlCommand.CommandTimeout = 180;
                        sqlCommand.Parameters.AddWithValue(parameterName: "@Id", request.Id);
                        _sqlConnection.Open();

                        int status = await sqlCommand.ExecuteNonQueryAsync();
                        if (status <= 0)
                        {
                            response.IsSuccess = false;
                            response.Message = "Something Went Wrong";
                        }
                    }

                }
            catch(Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
                
            }
            finally{
                _sqlConnection.Close();
            }

            return response;
        }

        public async Task<ReadRecordResponse> ReadRecord(ReadRecordRequest request)
        {
            ReadRecordResponse response = new ReadRecordResponse();
            response.IsSuccess = true;
            response.Message = "Success";

            try
            {

                string sqlQuery = "Select username, password from itoperation where UserId=@UserId and UserPassword=@UserPassword";
                using (SqlCommand sqlCommand = new SqlCommand(sqlQuery,_sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                    sqlCommand.Parameters.AddWithValue(parameterName: "@UserId", request.UserName);
                    sqlCommand.Parameters.AddWithValue(parameterName: "@UserPassaword", request.UserPasssword);

                    _sqlConnection.Open();

                    int status = await sqlCommand.ExecuteNonQueryAsync();
                    if (status <= 0)
                    {
                        response.IsSuccess = false;
                        response.Message = "record not found";
                    }

                }

            }catch(Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }

            return response;

        }

        public async Task<UpdateRecordResponse> UpdateRecord(UpdateRecordRequest request)
        {
            UpdateRecordResponse response = new UpdateRecordResponse();
            response.IsSuccess = true;
            response.Message = "Success";

            try
            {
                string SqlQuery = $"Update CrudOperationTable Set Username=@Username,Age=@Age Where Id=@Id";
                using (SqlCommand sqlCommand = new SqlCommand(SqlQuery, _sqlConnection))
                {
                    sqlCommand.CommandType = System.Data.CommandType.Text;
                    sqlCommand.CommandTimeout = 180;
                     sqlCommand.Parameters.AddWithValue("@Username", request.Username);
                     sqlCommand.Parameters.AddWithValue("@Age", request.Age);
                     sqlCommand.Parameters.AddWithValue("@Id", request.Id);

                    _sqlConnection.Open();
                    int Status = await sqlCommand.ExecuteNonQueryAsync();
                    if (Status <= 0)
                    {
                        response.IsSuccess = false;
                        response.Message = "Something Went Wrong";
                    }
                }

            }catch(Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }
            finally
            {
                _sqlConnection.Close();
            }

            return response;
            
        }
    }
}
