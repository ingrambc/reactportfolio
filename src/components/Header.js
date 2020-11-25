import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styled from "styled-components";

const StyledNav = styled.div`
  .navbar {
  color:rgb(44, 141, 44);
  background-color: rgb(187, 243, 187);
  margin: 0;
  padding: 0;
  }

  .navbar-brand{
    height: 60px;
    margin: 0;
    margin-left: 30px;
    padding: 10px;
    background-color: rgb(44, 141, 44);
    color:rgb(187, 243, 187);
    font-weight: bolder;
    font-size: 26px;
  }
  
`;

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <StyledNav>
      <Navbar color="rgb(44, 141, 44)" light expand="md">
        <NavbarBrand href="/">Brian Ingram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfoilio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </StyledNav>
  );
}

export default Example;