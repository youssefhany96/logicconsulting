import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './Navigation1.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// const header = () => {
//   return (
//     <div className='bb b--light-gray bw1'>
//       <div className='ma ph3' >
//         <div className= 'center'></div>
//       </div>
//     </div>
//   );
// }


const Navigation1 = () => {
  return (
    <div className="container my-2">
      <Row>
        <Col style={{display: 'flex', justifyContent: 'flex-start'}}>
          <a href="tel:+201273505023" className="info-link" target="_blank">
            <i className="info-icon"><img width="15" height="15" alt='phone' src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' /> </i>
             <span className="info-text">+2 012 7350 5023</span>
          </a>
        </Col>
        <Col>
          <img width="15" height="15" alt='android' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46VLbbP3bu_1TPI3og8-XrUwrXSOMndrWfg&usqp=CAU'/> 
          <span className='ph2'>Cairo,Egypt</span>
        </Col>
        <Col>
          <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Executive Education</Nav.Link>
                <Nav.Link href="#home">CEO Club</Nav.Link>
                <Nav.Link href="#features">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>    
          </Navbar>
        </Col>    
      </Row>
    </div>
  );  
}
export default Navigation1; 
