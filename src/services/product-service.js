import {http, privateHttp} from "./axios-helper";
import product from "../components/Product";

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
  return privateHttp.get(`/products/${productId}`).then((res) => res.data);
};
// Add product 
export function addProduct(product) {
  return privateHttp.post(`/categories/${product.categoryId}/products/`, product).then(res => res.data)
}
// Add product 
export function updateProduct(productId) {
  return privateHttp.put(`/products/${productId}`).then(res => res.data)
}
