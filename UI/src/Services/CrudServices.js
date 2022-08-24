import config from '../Configuration/Configuration'
import Axios from './AxiosServices';

const axios= new Axios();
export default class CrudServices {
    CreateRecord(data) {
        console.log('data', data,"Url",config.CreateRecord)
        return axios.post(config.CreateRecord,data,false)
    }
}