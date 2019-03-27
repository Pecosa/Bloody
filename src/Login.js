import React, { Component } from "react";
import "./App.css";
import logo from './img/logotipo.svg';


import { Container, Row, Col, Form, Button} from 'react-bootstrap';


class Login extends Component {
    render() {
        return (
            <div className="h-100  bg-blue">
                <Container className="mr-top-container bg-blue mr-top-container-4">
                  
                    <Row className="justify-content-md-center">
                        <Col xs lg="4" className="">
                            <h2 className="f-w">Login</h2>
                            <h4 className="f-w">Ingresa lo que te solicita</h4>
                            <br></br>

                            <Form className="text-left">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="f-w">Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <Button variant="outline-light" type="submit" size="lg" className="w-100">
                                   Enviar
                                 </Button>
                            </Form>

                        </Col>
                    </Row>
                        
                    
                </Container>

            </div>
        );
    }
}


export default Login;