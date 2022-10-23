import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllOrders,deleteOrder } from "../../services/order-service";
import {toast} from "react-toastify";
import {Button, Card, CardBody, Col, Container, Row, Table} from "reactstrap";


function ManageOrder() {
  const [orders, setOrders] = useState([]);

  const [model,setModel] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  const toggle = () => setModel(!model);
  
  const deleteOrders=(orderId)=>{
    deleteOrder(orderId).then(res=>{
        toast.success("Order canceled Successfully")
    }).catch(error=>{
        console.log(error)
    })
   
  }

  let imagesStyle={
    width:'100%',
    height:'300px',
    objectFit:'contain',
    margin:'15px 0',
}

  useEffect(() => {
    getAllOrders()
      .then((res) => {
        console.log(res);
        toast.success("orders loaded");
        setOrders([...res]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading orders");
      });
  }, []);

  function viewOrderHtml() {
    return (
      <Row>
        <Col md={12}>
          <h1>All order is here</h1>
          <Table>
            <thead>
              <tr>
                <th>OrderId</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Created</th>
                <th>Items</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => {
                return (
                  <tr key={i}>
                    <td>{order.orderId}</td>

                    <td>{order.orderAmount}</td>
                    <td>{order.orderStatus}</td>
                    <td>{order.paymentStatus}</td>
                    <td>{new Date(order.orderCreated).toDateString()}</td>
                    <td>{order.items.length} Items</td>
                    <td>
                      <Button color={"warning"}>View</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }

  return (
    <Container>
      <Card>
        <CardBody>{orders && viewOrderHtml()}</CardBody>
      </Card>
    </Container>
  );
}

export default ManageOrder;
