import React from "react";
import { Row, Col, Form, Container } from 'react-bootstrap';

import './ContactPage.css'

function ContactPage() {
    return (
        <Container>
            <Form>
                <Form.Group controlId="form.Subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>
                <Form.Group controlId="form.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="form.Textarea">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
      </Container>
    );
}

export default ContactPage;
