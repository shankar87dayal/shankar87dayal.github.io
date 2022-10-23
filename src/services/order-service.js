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
export const deleteOrder = (orderId) => {
  return privateHttp.delete(`/orders/${orderId}`).then(res=>res.data);
};

export const updateOrder=(order,orderId)=>
{
  return privateHttp.put(`/orders/update/${orderId}`,{
    "orderStatus": order.orderStatus,
    "paymentStatus":order.paymentStatus,
    "orderDelivered":order.orderDelivered
  }).then(res=>res.data)
}
