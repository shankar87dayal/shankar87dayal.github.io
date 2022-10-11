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
import { deleteProduct, loadProducts,loadSingleProduct} from "../../services/product-service";

function ViewProducts() {

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null)
  const [product, setProduct] = useState(null);
  const[clickProduct,setClickProduct]=useState(null);
  
  const closeModal = () => setModal(false);

  // const openModal = (Product) => {
  //   setSelectedItem(product)
  //   setModal(true)
  // };

  const openModal=(clickProductId)=>{

   console.log(clickProductId);
   setModal(true);
   loadSingleProduct(clickProductId).then(data=>{
   setSelectedItem(data);
    console.log(data);

   }).catch(error=>{
    console.log(error);
   })

  
  }
 

  let imageStyle = {
    width: '100%',
    height: '100px',
    objectFit: 'contain',
    margin: '15px 0'
  }
  

  

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
        <ModalHeader toggle={closeModal}>Products of order {selectedItem && 'MYSHOP'+selectedItem.productId}</ModalHeader>
        <ModalBody>

       
        
        <Card>
          <CardBody>
            <Row>
            <Col md={8}>
                          <CardText>
                            <h5>Product Name : {selectedItem.productName}</h5>
                            </CardText >
    
                            <CardText  >
                              <h5>Product Desc: {selectedItem.productDesc} </h5>
                            </CardText>

                            <CardText ><h5>{selectedItem.stock?"Available":"false"}</h5></CardText>
    
                            <CardText>
                            <h5>Quantity : <b> {selectedItem.productQuantity}</b></h5>
                            </CardText>
    
                            <CardText>
                            <h5>Prize: ₹{selectedItem.productPrice}<b></b></h5>
                            </CardText>
                           
                          </Col>
                      <Col md={4}><img style={imageStyle} src={BASE_URL+'/products/images/'+selectedItem.productId} alt="" /></Col>
            </Row>

          </CardBody>
        </Card>
        


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
                      <Button  color={"primary"} size={"sm"}  onClick={()=>openModal(p.productId)} className={"ms-2"}>
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
        <CardBody>{product && viewProductHtml()} 

        {
          selectedItem && modalHtml()
        }
         </CardBody>

      </Card>
    </Container>
   
    </>
    
  );
}
export default ViewProducts;
