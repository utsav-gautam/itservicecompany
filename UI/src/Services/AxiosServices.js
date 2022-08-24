import axios from 'axios'

export default class AxiosService{

    post(url,data,header){
        return axios.post(url,data,header);
    }
}