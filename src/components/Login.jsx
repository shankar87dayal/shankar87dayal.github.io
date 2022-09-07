import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { 
    Container,
    Row,
    Col,
    Card,
    CardBody,
    //CardTitle,
    Input,
    Label,
    Button,
    //form
  } from 'reactstrap'
import { generateToken } from '../services/user-service'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth'
import Base from './Base'

function Login() {

  const naviage = useNavigate()

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const setValue = (event,fieldName) => {
    setLoginData({...loginData, [fieldName]:event.target.value })
  }
 const loginFormSubmit = (event) =>{ 
  event.preventDefault();

  if(loginData.username.trim()=== '') {
    toast.error("username is required !!")
    return
  }

  if(loginData.password.trim()=== '') {
    toast.error("password is required !!")
    return
  }

  //send the request to server to generate token

  generateToken(loginData).then((data) =>{
    console.log(data);
    toast.success("login success !!")
    
    login(data, ()=>{
      //redirect user to user dashboard
      naviage("/user/dashboard")
    })
  }).catch(error => {
    if (error.response.status === 400 || error.response.status === 404)
    {
      toast.error(error.response.data.message)
    }else{
      toast.error("login error")
    }
    console.log(error)
    

  })

 }

  return (

    <Base>
    
    <Container>


    <Row>

      <Col md={{
        size:6,
        offset:3
      }}>

      <Card  className='shadow-sm mt-5'>

      <CardBody>


         <h3>Login here</h3>
         {/* {JSON.stringify(loginData)} */}
         <form onSubmit={loginFormSubmit}>
          
          <div className='my-3'>
            <Label for="username" >UserName</Label>
            <Input 
             className='rounded-0' 
             id='username' 
             placeholder='Enter your username'
             value={loginData.username}
             onChange={(event) => setValue(event, 'username')}
             type="text"
             />
          </div>
          <div className='mb-3'>
            <Label for="password" >Password</Label>
            <Input
              type='password'
              className='rounded-0'
               id='Password' 
               placeholder='Enter your password'
               value={loginData.password}
               onChange = {(event) => setValue(event, 'password')}
               />
          </div>

          <Container className='text-center'>
            <Button block color='primary' className='rounded-0'>Login</Button>
            <Button  block  color='primary' className='mt-2 rounded-0' type="reset" >Reset</Button>
          </Container>

         </form>

      </CardBody>

      </Card>


      </Col>

    </Row>


  </Container>
    
    
    </Base>
    

  )
}

export default Login