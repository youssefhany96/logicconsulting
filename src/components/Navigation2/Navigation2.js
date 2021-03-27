import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../Logo/Logo';

const Navigation2 = ( { handleOpen, handleClose, isOpen}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/"><Logo /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#Industries">Industries</Nav.Link>
          <Nav.Link href="#Consulting Services">Consulting Services</Nav.Link>
          <Nav.Link href="#Insights">Insights</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown
            onMouseEnter = { handleOpen }
            onMouseLeave = { handleClose }
            show={ isOpen }
            noCaret
            title="Dropdown"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Careers">Careers</Nav.Link>
          <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        </Nav>
        <Form className='pa2' style={{display: 'flex', justifyContent: 'flex-end'}} >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation2;  
