import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup, 
  InputGroupAddon, 
  Button, Input
} from 'reactstrap';
import Add from './img/add2.png';
import Search from './img/search.png';

const Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor: '#6495ED'}} light expand="md" className="fixed-top">
        <NavbarBrand href="/listvideo" style={{color:"White", fontFamily:"sans-serif"}} className="menu">ListVideo</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/profile"  style={{color:"White", fontFamily:"sans-serif"}} className="menu">Profil</NavLink>
            </NavItem>
            <NavItem>
            <div className="abs-center-x">
           <InputGroup>
             <Input  style={{width:"400px", height:"30px", marginTop:"5px"}} placeholder="Search..."/>
             <InputGroupAddon addonType="append" style={{height:"30px", marginTop:"5px"}}>
             <Button color="primary"><img src={Search} style={{width:"15px", height:"15px", marginBottom:"12px"}}></img></Button>
             </InputGroupAddon>
            </InputGroup>
            </div>
          </NavItem>
          </Nav>
          <Nav navbar>
          <NavItem>
              <NavLink href="/addvideo" className="menu"><img src={Add} width="20px" height="20px"></img></NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="#" style={{color:"White", fontFamily:"sans-serif"}} className="menu">Logout</NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;