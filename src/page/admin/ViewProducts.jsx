import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import { BASE_URL } from "../../services/axios-helper";
import { deleteProduct, loadProducts} from "../../services/product-service";

function ViewProducts() {

  let imageStyle = {
    width: '100%',
    height: '100px',
    objectFit: 'contain',
    margin: '15px 0'
  }
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  const [product, setProduct] = useState(null);

  const closeModal = () => setModal(false);
  const openModal = (Product) => {
    setSelectedItem(product)
    setModal(true)
  };

  useEffect(() => {
    loadProductFromServer(0);
  }, []);

  const loadProductFromServer = (pageNumber) => {
    loadProducts(pageNumber, 20)
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading products");
      });
  };

  const deleteProductFromServer = (p) => {
    deleteProduct(p.productId)
      .then((res) => {
        console.log(res);
        let newProducts = product.content.filter(
          (pr) => pr.productId !== p.productId
        );
        setProduct({
          ...product,
          content: newProducts,
        });
        toast.success("Product is deleted");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in deleting product");
      });
  };

  const modalHtml = () => {
    return (
      <Modal isOpen={modal} toggle={closeModal} size='lg' centered={true} >
        {/* <ModalHeader toggle={closeModal}>Products of order {selectedItem && 'MYSHOP'+selectedItem.productId}</ModalHeader> */}
        <ModalBody>

          {
            selectedItem && selectedItem.items.map((item, index) => (
              <Card className="mt-2 border-0 shadow-sm" >
                <CardBody>

                  <Row key={index}>
                    <Col md={8}>
                      <h3>{item.product.productName}</h3>
                      <CardText>
                        Quantity : <b>{item.quantity}</b>
                      </CardText>


                      <CardText className='mt-3'>
                        Total Price : <b>{item.totalProductPrice}</b>
                      </CardText>

                    </Col>
                    <Col md={4}>
                      <img style={imageStyle} src={BASE_URL + '/products/images/' + item.product.productId} alt="" />

                    </Col>
                  </Row>

                </CardBody>
              </Card>
            ))
          }


        </ModalBody>

      </Modal>
    )
  }

  const viewProductHtml = () => {
    return (
      <Row>
        <Col md={12}>
          <h3>Here is all prouducts</h3>

          <FormGroup>
            <Input placeholder={"Search product"} type={"text"} />
          </FormGroup>

          <Table
            bordered
            borderless
            responsive
            hover
            className={"bg-white text-center"}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>title</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product.content.map((p, index) => {
                return (
                  <tr key={index}>
                    <td>{p.productId}</td>
                    <td>{p.productName}</td>
                    <td>{p.productPrice}</td>
                    <td>{p.stock ? "True" : "False"}</td>
                    <td>{p.category.title}</td>
                    <td>{p.productQuantity}</td>
                    <td>
                      <Button
                        onClick={(event) => deleteProductFromServer(p)}
                        color={"danger"}
                        size={"sm"}
                      >
                        Delete
                      </Button>
                      <Button tag={Link} to={'/view-product/'+product.productId} color={"warning"} size={"sm"} className={"ms-2"}>
                        Update
                      </Button>
                      <Button onClick={() => openModal(product)} color={"primary"} size={"sm"} className={"ms-2"}>
                        View
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Pagination>
            {Array.from(Array(product.totalPages), (e, i) => (
              <PaginationItem active={i === product.pageNumber}>
                <PaginationLink onClick={() => loadProductFromServer(i)}>
                  {i}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem disabled={product.lastPage}>
              <PaginationLink
                onClick={(event) =>
                  loadProductFromServer(product.pageNumber + 1)
                }
                next
              />
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    );
  };

  return (
    
    <>
    
    <Container>
      <Card>
        <CardBody>{product && viewProductHtml()} </CardBody>
      </Card>
    </Container>
   
    </>
    
  );
}
export default ViewProducts;
