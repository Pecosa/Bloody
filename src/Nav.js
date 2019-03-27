import React, { Component } from "react";
import "./App.css";
import logo from './img/logotipo.svg';
import profile from './img/profile.jpg';
import { Navbar, Form, Button, FormControl, Nav, DropdownButton, Dropdown} from 'react-bootstrap';
class Nave extends Component {
    render() {
        return (
            <div>
        
                <Navbar className="bg-blue" variant="light" fixed="top">
                    <Navbar.Brand href="#home"><img src={logo} className="logo-nav" alt="logo" /></Navbar.Brand>
                    <div className="ml-auto personalizacion">
                        <div className="img-profile "><img src={profile} className="img-profile" alt="logo" /></div>
                        <DropdownButton id="dropdown-item-button" className="" title="Paulina Espinosa">
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Cerrar sesión</Dropdown.Item>
                        </DropdownButton>
                    </div>
            </Navbar>

               
            </div>
        );
    }
}


export default Nave;