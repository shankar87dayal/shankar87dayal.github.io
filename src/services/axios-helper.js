import axios from 'axios'

export const BASE_URL='http://localhost:8181'
export const http=axios.create({
    baseURL:BASE_URL
})