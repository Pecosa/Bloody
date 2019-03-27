import React, { Component } from "react";
import "./App.css";
import donar from './img/donar.svg';
import alerta from './img/alerta.svg';

import { Container, Row, Col, Card } from 'react-bootstrap';
class SelectContainer extends Component {
    render() {
        return (
            <div>
                <Container className="mr-top-container">
                    <h4>Selecciona una opción</h4>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6} className="p-b-10">

                            <Card className="card-height">
                                <Card.Img variant="top" className="img-select" src={donar} />
                                <Card.Body>
                                    <Card.Title>Donar</Card.Title>
                                   
                                </Card.Body>
                            </Card>
                           
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <Card className="card-height">
                                <Card.Img variant="top" className="img-select" src={alerta} />
                                <Card.Body>
                                    <Card.Title>Alerta</Card.Title>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}


export default SelectContainer;