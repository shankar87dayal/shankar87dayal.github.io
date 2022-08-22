import React from 'react'
import { 
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Input,
  Label,
  Button
} from 'reactstrap'
function Signup() {
  return (
    <Container>


    <Row>

      <Col md={{
        size:6,
        offset:3
      }}>

      <Card  className='shadow-sm mt-5' color=''>

      <CardBody>


         <h4>Let's</h4>
         <h2>Sign Up </h2>

         <form>

          <div className='my-3'>
            <Label for="FullName" >FullName</Label>
            <Input  className='rounded-0' id='FullName' placeholder='Enter your FullName'/>
          </div>
          <div className='mb-3'>
            <Label for="UserName" >Email/phone</Label>
            <Input  className='rounded-0' id='UserName' placeholder='Enter your Email id or phone nu.'/>
          </div>
          <div className='mb-3'>
            <Label for="password" >Create-password</Label>
            <Input  className='rounded-0' id='Password' placeholder='Enter your password'/>
          </div>
          <div className='mb-3'>
            <Label for="password" >Re-Enter</Label>
            <Input  className='rounded-0' id='Password' placeholder='Enter your password'/>
          </div>

          <Container className='text-center'>
            <Button block color='primary' className='rounded-0'>SignUp</Button>
            {/* <Button  block  color='warning' className='mt-2 rounded-0'>Rest</Button> */}
          </Container>

         </form>

      </CardBody>

      </Card>


      </Col>

    </Row>


  </Container>
  )
}

export default Signup