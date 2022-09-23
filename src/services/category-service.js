import { http, privateHttp } from "./axios-helper"

export const loadCategories =()=>{
     return http.get(`/categories/`).then(reaponse=> reaponse.data)
}

//Add category
export function addCategory(cat){
     return privateHttp.post(`/categories/`, cat).then(res => res.data)
}
//Delete Category
export function deleteCategory(catId){
     return privateHttp.delete(`/categories/&{catId}`).then(res => res.data)
}