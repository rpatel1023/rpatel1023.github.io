import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap'
import "./HomePage.css"

function HomePage() {
    return (
        <div className='mainPage'>
            <Container fluid style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <Row className="justify-content-md-center row" style={{display: 'flex', justifyContent: 'center'}}>
                    <Col sm={3} style={{display: 'flex', justifyContent: 'center', padding: '0px'}}>
                        <Image style={{ border: "5px solid white"}}className="responsive" src="/images/profile.jpg" roundedCircle='True' width="380px" height="380px" alt="profile"/>
                    </Col>
                    <Col sm={8} style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                        <div style={{width:'80%'}}>
                            <h1>Hello! My name's Rushi,</h1>
                            <p> 
                                I'm a 3rd year Electrical and Computer Engineering major at the Univeristy of Texas at Austin. I've been programming since I was 15 years old, and am always seeking ways to solve problems through technology. <br/>  
                                I've been fortunate to have a range of work experiences. I spent my freshman year designing robots at NASA, and did research at the Intelligent Environments Laboratory on climate efficient building practices. <br/>
                                My sophomore summer took place in Toronto, where I was a Software Engineering Intern at Publicis Sapient, honing my front-end skills. Next summer I'll be in Seattle, working at Amazon as an SDE Intern! <br/>
                                I'm also a huge fan of Dota 2 and esports. I've worked at Team Liquid, designed Discord bots for esports communities, and even helped organized NA Dota In-house Leagues. Check out my blog for my biased sports opinions!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>        
    )   
}

export default HomePage;