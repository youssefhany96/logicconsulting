import React from 'react';
import './SocialFollow';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
import SocialFollow from './SocialFollow';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
const Home = (props) => (
  <GridWrapper>
    <a href="tel:+201273505023" className="info-link" target="_blank" rel="noreferrer">
        <i className="info-icon"><img width="15" height="15" alt='phone' src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' /> </i>
        <span className="info-text">+2 012 7350 5023</span>
    </a>
    <div>
        <img width="15" height="15" alt='android' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46VLbbP3bu_1TPI3og8-XrUwrXSOMndrWfg&usqp=CAU'/> 
        <span className='ph2'>Cairo,Egypt</span>
    </div>
    <Nav className="mr-auto">
        <Nav.Link href="/">Executive Education</Nav.Link>
        <Nav.Link href="#Industries">CEO Club</Nav.Link>
        <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
    </Nav>          
    {/* <p>This is another paragraph, hi hey hello whatsup yo</p> */}
    <SocialFollow />
  </GridWrapper>
)

export default Home;