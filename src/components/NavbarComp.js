import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';


export default class NavbarComp extends Component {
  render() {
    return (
        <Router>
      <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
      {/* <Container> */}
        <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/Home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/About'}>about</Nav.Link>
            <Nav.Link as={Link} to={'/Contact'}>contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
      </div>
      <div>
      <Routes>
    <Route path='/Home' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
</Routes>
      </div>
      </Router>
    )
  }
}
