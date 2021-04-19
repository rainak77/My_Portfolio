import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import './Contact.styles.css';
import emailjs from 'emailjs-com';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ disabled: true, emailSent: false });

        emailjs.sendForm('service_eriva5e', 'template_ai7cuur', e.target, 'user_ijiqidcKPdGb52a7GQgna')
            .then((result) => {
                if (result.text === 'OK') {
                    this.setState({
                        name: '',
                        email: '',
                        message: '',
                        disabled: false,
                        emailSent: true
                    });
                }
            }, (error) => {
                console.log(error.text);
            });

    };


    render() {
        return (
            <div className="pt-3 pb-3" id="contact">
                <h1 className="text-center font-details-b ">CONTACT</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center justify-content-center">
                        <Col xs={12} md={8} >
                            <Row className=" p-2 my-details rounded ">
                                <h1 className='font-weight-bolder mx-auto'> Let's Talk  </h1>
                            </Row>
                            <Row className=" p-2 my-details rounded">
                                <Form className='mx-auto' onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label htmlFor='fullname'>Full Name</Form.Label>
                                        <Form.Control id='fullname' name='name' type='text' value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor='email'>Email</Form.Label>
                                        <Form.Control id='email' name='email' type='email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor='message'>Message</Form.Label>
                                        <Form.Control id='message' name='message' as='textarea' rows='3' value={this.state.message} onChange={(event) => this.setState({ message: event.target.value })} />
                                    </Form.Group>

                                    <Button type='submit' disabled={this.state.disabled}>
                                        Send
                                    </Button>

                                    {this.state.emailSent === true && <p className='d-inline success-msg'>Email Sent Successfully</p>}
                                    {this.state.emailSent === false && <p className='d-inline err-msg'>Failed to sent Email</p>}

                                </Form>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Contact;