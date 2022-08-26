import axios from "axios";

const BASE_URL='http://localhost:8181'

export const createUser=(data)=>{
    return axios.post(`${BASE_URL}/users/`,data).then(response=>response.data)
}