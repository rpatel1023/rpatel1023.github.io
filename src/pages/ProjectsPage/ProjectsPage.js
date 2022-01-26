import React from 'react';
import { Row, Col, Button, Card, Container } from 'react-bootstrap'

import "./ProjectsPage.css"

function ProjectsPage() {
    return (
        <div className='projectsPage'>
            <Container fluid style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}> 
                <Row className="justify-content-md-center row" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                    <Row>
                        <h1>Projects</h1>
                    </Row>
                    <Row className="justify-content-md-center row">
                        <Col xs md={6}>
                            <h2>Immortal Bot</h2>
                            <h6>Discord.py, Python, SQL, AWS</h6>
                            <h4>Immortal Bot is an esports match-fetching bot for Discord.<br/> I designed the bot to keep esport fans informed on their favorite player/teams upcoming matches. It is currently used by multiple professional esport teams and players, reaching 70,000+ users.</h4>
                            <Button variant='outline-success'href="https://github.com/rpatel1023/ImmortalBot"  target="_blank" >Github</Button>
                        </Col>
                        <Col xs md={6}>
                            <h2>Personal Website</h2>
                            <h6>ReactJS, HTML5, CSS</h6>
                            <h4>My personal portfolio, built with ReactJS, HTML5, and CSS! One of my personal favorite projects from the sheer freedom I've had to customize and design everything myself.</h4>
                            <Button variant='outline-success' href="https://github.com/rpatel1023/personal-website" target="_blank">Github</Button>
                        </Col>
                        <Col xs md={6}>
                            <h2>Bevo's Hardware Services</h2>
                            <h6>ReactJS, HTML5, CSS, Python, MongoDB</h6>
                            <h4>A Hardware as a Service web application created for EE461L. The app is a full stack application hosted on Heroku with a MongoDB cluster, allowing users to manage their hardware resources and distribute them amongst various projects</h4>
                            <Button variant='outline-success' href="https://github.com/rpatel1023/Barons_461L" target="_blank">Github</Button> &nbsp; 
                            <Button variant='outline-info' href="https://barons461.herokuapp.com/" target="_blank" >Demo</Button>
                        </Col>
                    </Row>
 
                    <Row className="justify-content-md-center row" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                    <Col xs md={6}>
                            <h2>IXDL Website</h2>
                            <h6>HTML5, CSS, PHP, MySQL</h6>
                            <h4>A simple webpage created to host the standings for the North American Dota League, IXDL. Referenced by many Dota streamers and received thousands of users in traffic since launch!</h4>
                            <Button variant='outline-info' href="https://northamericandota.com/" target="_blank" >Demo</Button>
                        </Col>
                        <Col xs md={6}>
                            <h2>Football Stars</h2>
                            <h6>C++, TM4C, ARM</h6>
                            <h4>Football Stars in a simple football game created in C++ for the final project in Intro to Embedded Systems at the University of Texas at Austin. The goal of the game is to score 3 touchdowns using embedded hardware and the TM4C microcontroller</h4>
                            <Button variant='outline-success' href="https://github.com/rpatel1023/football-stars" target="_blank" >Github</Button> &nbsp; 
                            <Button variant='outline-info' href="https://youtu.be/mc1Jbsa6Tg8" target="_blank" >Demo</Button>
                        </Col>
                        <Col xs md={6}>
                            <h2>Auction House Desktop App</h2>
                            <h6>Java, SQL</h6>
                            <h4>An auction house application designed to demonstrate the client-server relationship in Java. Utilizes JavaFX to create a desktop GUI and SQL to store records on items being processed in the auction system.</h4>
                        </Col>
                    </Row>    
                </Row>     
             
            </Container>
        </div>
    )   
}

export default ProjectsPage;