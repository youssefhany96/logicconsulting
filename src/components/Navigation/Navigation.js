import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../Logo/Logo';


const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    display: flex;
    justify-content: flex-end;
  }
`;
const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><Logo /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
        <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
        <Button variant="outline-info">Search</Button>
      </Form>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default Navigation; 