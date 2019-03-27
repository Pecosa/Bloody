import React, { Component } from "react";
import "./App.css";
import logo from './img/logotipo.svg';


import { Container, Row, Col, Form, Button} from 'react-bootstrap';


class SignUp extends Component {
    render() {
        return (
            <div className="h-100  bg-blue mr-top-container-4">
                <Container className=" bg-blue">
                    <h2 className="f-w">Sign Up</h2>
                    <h4 className="f-w">Ingresa lo que te solicita</h4>
                    <br></br>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="4" className="">
                           

                            <Form className="text-left">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="f-w">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Escribe tu nombre" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">Edad</Form.Label>
                                    <Form.Control type="edad" placeholder="Escribe tu edad" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">sexo</Form.Label>
                                    <Form.Control type="edad" placeholder="F/M" />
                                </Form.Group>
                               
                            </Form>

                        </Col>

                        <Col xs="12" lg="4" className="">
                          
                            <Form className="text-left">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="f-w ">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Escribe tu apellido" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">Tipo de sangre</Form.Label>
                                    <Form.Control type="text" placeholder="Escribe tu tipo de sangre" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword text-left">
                                    <Form.Label className="f-w ">Delegación</Form.Label>
                                    <Form.Control type="text" placeholder="Selecciona tu delegación" />
                                </Form.Group>
                            </Form>
                           
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col xs="12" lg={{ span: 8, offset: 2 }} className="text-left">
                            <Form.Group controlId="formBasicPassword text-left">
                                <Form.Label className="f-w ">Imagen profile</Form.Label>
                                <Form.Control type="text" placeholder="Selecciona tu imagen de profile" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="outline-light" type="submit" size="lg" className="w-100 col-lg-8">
                        Enviar
                                 </Button>
                   
                    
                </Container>

            </div>
        );
    }
}


export default SignUp;