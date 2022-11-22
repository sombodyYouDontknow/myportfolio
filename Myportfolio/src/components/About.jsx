import React, { useEffect } from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import {FaAward , FaProjectDiagram ,FaUsers} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/about.css'
function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='about_content'>
      <div className='content'>
        <Container>
          <Row>
            <Col md={{ span: 5, offset: 3 }}>
              <div data-aos="fade-right"><h2 className='heading'>About me</h2></div>
              <div data-aos="fade-left">
                <p>I'm  comfortable working with both the front-end and back-end of a website or application and
                  also comfortable working with a variety of programming languages and tools,
                  and is able to understand how the different parts of a website or application work together.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

        <Container>
          <Row>
            <Col>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Card className="m-2">
                <Card.Body>
                  <Card.Title><FaAward/> Experience</Card.Title>
                  <Card.Text>
                     3 year working experience
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Col>

            <Col>
            <div data-aos="fade-up" data-aos-duration="1150">
              <Card className="m-2">
                <Card.Body>
                  <Card.Title> <FaProjectDiagram/> Projects</Card.Title>
                  <Card.Text>
                      Only one for the moment 
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Col>

            <Col>
            <div data-aos="fade-up" data-aos-duration="1200">
              <Card className="m-2">
                <Card.Body>
                  <Card.Title> <FaUsers/> Client</Card.Title>
                  <Card.Text>
                    Maxwell International
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default About