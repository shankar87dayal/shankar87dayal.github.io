import { http } from "./axios-helper"

export const loadCategories =()=>{
     return http.get(`/categories/`).then(reaponse=> reaponse.data)
}