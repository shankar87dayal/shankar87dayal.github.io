import { privateHttp } from "./axios-helper";

export const createOrder = (orderDetail) => {
  return privateHttp
    .post(`/orders/create`, orderDetail)
    .then((response) => response.data);
};

export const getOrders = () => {
  return privateHttp.get(`/orders/getOrder`).then(res=>res.data);
};
export const getAllOrders = () => {
  return privateHttp.get(`/orders/getAll`).then(res=>res.data);
};