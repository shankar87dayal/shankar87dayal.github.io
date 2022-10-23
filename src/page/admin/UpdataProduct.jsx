import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { updateProducts } from '../../services/product-service';
import JoditEditor from 'jodit-react';

function UpdateProduct() {

    const {productId} = useParams()
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState('');
    const [content, setContent] = useState('');
    const editor = useRef(null);
       

    
    function updateProductFormSubmit(event) {

        event.preventDefault()
        updateProducts(product,productId).then(data => {
            console.log(data)
            toast.success("Product added success")
         
        }).catch(error => {
            console.log(error)
            toast.error("error in adding product")
        })
    }
    //field change product Dedcription
    const contentFieldChanged = (data)=>{
        setProduct({...product,'productDesc':data})
    }

    const updateProductHtml=() =>{
        return (
            <Row>
                <Col md="11">

                <h3 className="text-center" style={{color:"Blue"}}> Add New Product </h3> 

                    <Form onSubmit={updateProductFormSubmit}>
                        {console.log(product)}
                        {JSON.stringify(product)}
                        {JSON.stringify(product.category)}
                        


                        {/*name*/}

                        <FormGroup>
                            <Label>Product name</Label>
                            <Input type={'text'}
                                   value={product.productName}
                                   onChange={event => setProduct({...product, productName: event.target.value})}
                            />
                        </FormGroup>


                        {/*description*/}

                        <FormGroup>
                           
                            <Label for={'productDesc'}><h5><b>Product Description</b></h5></Label>
                           {/* <Input id={'productDesc'} placeholder="Enter ProductDesription Here" type={'textarea'} onChange={event =>setProduct({...product,productDesc:event.target.value})} value={product.productDesc} ></Input>*/}
                           <JoditEditor
                           ref={editor}
                           value={content}
                           onChange={contentFieldChanged}
                           />                       
                            </FormGroup>


                        {/*price*/}

                        <FormGroup>
                            <Label>Product price</Label>
                            <Input type={'number'}
                                   value={product.productPrice}
                                   onChange={event => setProduct({...product, productPrice: event.target.value})}

                            />

                        </FormGroup>

                        


                        {/*live*/}

                        <FormGroup>
                            <Label for={'live'}>Product Live</Label>
                            <Input className={'ms-2'} id={'live'} type={"checkbox"}
                                   checked={product.live}

                                   onChange={event => setProduct({...product, live: !product.live})}

                            />
                        </FormGroup>
                        {/*stock*/}

                        <FormGroup>
                            <Label for={'stock'}>Product stock</Label>
                            <Input className={'ms-2'} id={'stock'} type={"checkbox"}
                                   checked={product.stock}
                                   onChange={event => setProduct({...product, stock: !product.stock})}

                            />
                        </FormGroup>

                        < FormGroup>
                            <Container className="text-center">
                            <Button type="submit" color="success" block> Add Product</Button>
                            </Container>
                        </FormGroup>

                    </Form>

                </Col>
            </Row>
        )
    }

  return (
    <Container>
            <Card>
                <CardBody>
                    {updateProductHtml()}

                </CardBody>
            </Card>
        </Container>
  )
}

export default UpdateProduct