import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles/home.css'
import image from '../assets/full_stack2.gif'
function Home() {
  
  return (

  <Container>
    <Row>
        <Col  md={6}>
        <div className='content'>
        <h2>Hi i'm</h2>
        <h1>Sachin Chandran</h1>
        <p><strong>A Full Stack Developer</strong><br/>who likes to builds a careers in this field </p>
        </div>
        </Col>
   
    <Col  md={6}>
    <div className='image_content'> 
       <img src={image} alt="" />
    </div>
    </Col>
    
    
    </Row>
     

    
  </Container>

   


  )
}

export default Home