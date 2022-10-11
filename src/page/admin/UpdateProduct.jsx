import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { updateProduct } from '../../services/product-service';

function UpdateProduct() {

   

    const [product, setProduct] = useState({
        productName: '',
        productDesc: '',
        productPrice: 0,
        productQuantity: 0,
        live: true,
        stock: true,
        imageName: '',
        categoryId: 0

    });

    
    function updateProductFormSubmit(event) {

        event.preventDefault()
        updateProduct(product).then(data => {
            console.log(data)
            toast.success("Product added success")
            setProduct({
                productName: '',
                productDesc: '',
                productPrice: 0,
                productQuantity: 0,
                live: true,
                stock: true,
                imageName: '',
                categoryId: 0

            })
        }).catch(error => {
            console.log(error)
            toast.error("error in adding product")
        })
    }

    function updateProductHtml() {
        return (
            <Row>
                <Col>

                    <h3>Update existing Product</h3>

                    <Form onSubmit={updateProductFormSubmit}>


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
                            <Label>Product description</Label>
                            <Input type={'textarea'}
                                   value={product.productDesc}
                                   onChange={event => setProduct({...product, productDesc: event.target.value})}

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

                        {/*quantity*/}

                        <FormGroup>
                            <Label>Product quantity</Label>
                            <Input type={'number'}
                                   value={product.productQuantity}
                                   onChange={event => setProduct({...product, productQuantity: event.target.value})}

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

                        {/*image*/}

                        <FormGroup>
                            <Label for={'image'}>Product Banner</Label>
                            <Input className={'ms-2'} id={'image'} type={"file"}/>
                        </FormGroup>

                        {/*    product category*/}

                        <FormGroup>
                            <Label for={'image'}>Product Banner</Label>
                            <Input className={'ms-2'} id={'image'} type={"select"}
                                   value={product.categoryId}
                                   onChange={event => setProduct({...product, categoryId: event.target.value})}

                            >
                                {
                                    categories.map((cat, i) => {
                                        return (
                                            <option value={cat.categoryId} key={i}>{cat.title}</option>
                                        )
                                    })
                                }
                            </Input>
                        </FormGroup>

                        {/* <Container className={'text-center'}>
                            <Button type={'submit'} color={'success'}>Add Product</Button>
                        </Container> */}

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