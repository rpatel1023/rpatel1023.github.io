import React from "react";
import { SocialIcon } from 'react-social-icons';
import { Row, Col, Container } from 'react-bootstrap'
import './Footer.css'


 
function Footer () {
    return (
        <Container className="footer" fluid style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>
            <Row className="justify-content-md-center row" style={{display: 'flex', justifyContent: 'center', paddingBottom: "10px"}}> 
                <p className='credits'>Created by me, last updated January 2022</p>
                <SocialIcon className="icon" url="https://www.linkedin.com/in/patelrushi01/" />
                <SocialIcon className="icon" url="https://github.com/rpatel1023" bgColor="#E6E6E6" />
                <SocialIcon className="icon" url="https://twitter.com/rushiipatel"/>
                <SocialIcon className="icon" url="mailto:rpatel1@utexas.edu" network="mailto"/>
                <SocialIcon className="icon" url="https://medium.com/@rpatel01" bgColor="#99CF6C"/>
            </Row>
        </Container>
    )
}

export default Footer;