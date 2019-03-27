import React, { Component } from "react";
import "./App.css";
import logo from './img/logotipo.svg';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



import { Container, Row, Col, Table} from 'react-bootstrap';


class listaAlertas extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle;
        this.state = { collapse: false };
    }

    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render() {
        return (
            <div className="h-100  bg-blue">
                
                <Container className="mr-top-container bg-blue mr-top-container-4">
                  
                    <Row className="justify-content-md-center">
                        <Col xs lg="12" className="">
                            <h2 className="f-w">Lista de alertas</h2>
                            <h4 className="f-w">Ayudános a ayudar</h4>
                            <br></br>
                        <Row>
                            <Col>Nombre</Col>
                            <Col>Lugar</Col>
                            <Col>Horario</Col>
                            <Col>Tipo de sangre</Col>
                            <Col>Acción</Col>
                        </Row>
                        <Row>
                                <Col className="text-white">Paulina Espinosa</Col>
                                <Col className="text-white">Hospital General</Col>
                                <Col className="text-white">8:00 am</Col>
                                <Col className="text-white">O+</Col>
                                <Col className="text-white"><Button color="primary" onClick={this.toggle} >Ver más</Button></Col>
                        </Row>
                        <hr></hr>
                        <Row>
                            <Col>
                            <Collapse isOpen={this.state.collapse}>
                                        <div className="col" className="text-white">
                                          
                                               Descripción: Anim pariatur cliche reprehenderit,
                                                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                 nesciunt sapiente ea proident.
       
                                        </div>
                            </Collapse>
                            </Col>
                        </Row>

                         
                           
                        
                        </Col>
                    </Row>
                        
                    
                </Container>

            </div>
        );
    }
}


export default listaAlertas;