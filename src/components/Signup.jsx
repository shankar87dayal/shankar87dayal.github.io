import React from 'react'
import { SketchPicker } from 'react-color';
import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'
import {  
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button,
  
} from 'reactstrap'
function Signup() {

  return (
    <Container >
      

      
    <Row>

      <Col md={{
        size:6,
        offset:3
      }}>

      <Card  className='shadow-sm mt-5' color='warning'>

      <CardBody >
   
    
      
          <h4>Let's</h4>
          <h2 > Sign up</h2>
          <form className='registation-form' id='registation-form'>

            <div >
          
              <label for="name">
              <i class="zmdi zmdi-account materil-icons-name"></i>
              </label>
              <input  type="text" name='name' id='name' autoComplete='off' 
              placeholder='Your name' size="50"/>
            </div>

            <div>
              <label htmlFor='email' className='my-3'>
              <i class="zmdi zmdi-email materil-icons-name"></i>
              </label>
              <input type="email" name='email' id='email' autoComplete='off' 
              placeholder='Your Email' size="50" />
            </div>

            <div >
              <label htmlFor='phone' className='mb-3'>
              <i class="zmdi zmdi-phone-in-talk materil-icons-name"></i>
              </label>
              <input type="number" name='phone' id='phone' autoComplete='off' 
              placeholder='Your contact number' size="50"/>
            </div>

            <div >
              <label htmlFor='password' className='mb-3'>
              <i class="zmdi zmdi-lock materil-icons-name"></i>
              </label>
              <input type="password" name='password' id='password' autoComplete='off' 
              placeholder='create your password' size="50"/>
            </div>

            <div >
              <label htmlFor='cpassword' className='mb-3'>
              <i class="zmdi zmdi-lock materil-icons-name"></i>
              </label>
              <input type="password" name='cpassword' id='cpassword' autoComplete='off' 
              placeholder='Conform your password' size="50"/>
              </div>
           
           <Container className='text-center'>
            <Button block color='primary' className='rounded-0'>Signup</Button>
           
          </Container>

          <div className='text-center'>
            
            <NavLink to="/Login" className="signup-image-link" > i am already register</NavLink>

            </div>
          </form>
        
   
    
 
    </CardBody>

</Card>


</Col>

</Row>
</Container>
  )
}

export default Signup