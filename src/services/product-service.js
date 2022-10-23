import {http, privateHttp} from "./axios-helper";
// import product from "../components/Product";

export const loadProducts = (
  pageNumber = "0",
  pageSize = "9",
  sortBy = "productId",
  sortDir = "desc"
) => {
  return http
    .get(`/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortDir=${sortBy}&sortby=${sortBy}`
    )
    .then((response) => response.data);
};

export const loadProductsByCategory = (
  categoryId,  
  pageNumber = "0",
  pageSize = "9",
  sortBy = "productId",
  sortDir = "desc"
) => {
  return http.get(`/categories/${categoryId}/products?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortBy}`
    )
    .then((response) => response.data);
};
// get product 
export const getProduct = (productId) => {
  return http.get(`/products/${productId}`).then((res) => res.data);
};
// Delete product 
export function deleteProduct(productId){
  return privateHttp.delete(`/products/${productId}`).then((res) => res.data);
};
// Add product 
export function addProduct(product) {
  return privateHttp.post(`/categories/${product.categoryId}/products/`, product).then(res => res.data)
}
// update product 
export function updateProducts(product,productId) {
  return privateHttp.put(`/products/${productId}`,{
    "productName" : product.productName,
    "productDesc" : product.productDesc,
    "productPrice" : product.productPrice,
    "Stock" : product.Stock,
     "Live" : product.Live 
  }).then(response=>response.data)
}

export const loadSingleProduct=(productId)=>{
  return http.get(`/products/${productId}`).then(response=>response.data)
};


export const UploadImage=(images,productId)=>{
  const formData=new FormData();
  formData.append("product_image",images);
  return privateHttp.post(`/products/images/${productId}`,formData,{
headers:{
  "Content-Type":"multipart/form-data"
},
  }).then(res=>res.data)

}
