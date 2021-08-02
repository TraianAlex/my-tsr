import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavProps } from '../index';

export const Navigation: React.FC<NavProps> = ({
  home,
  table,
  filter,
  map,
  todo,
  radioImage,
  radioImage2,
  friends,
  profile,
  watchList,
  listInvited,
}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand {...home} className="ml-3">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link {...home}>Home</Nav.Link>
          <Nav.Link {...table}>Table</Nav.Link>
          <Nav.Link {...filter}>Filter</Nav.Link>
          <Nav.Link {...map}>Map</Nav.Link>
          <Nav.Link {...todo}>Todo</Nav.Link>
          <Nav.Link {...radioImage}>Radio Image</Nav.Link>
          <Nav.Link {...radioImage2}>Radio Image2</Nav.Link>
          <Nav.Link {...profile}>Profile</Nav.Link>
          <Nav.Link {...friends}>Friends</Nav.Link>
          <NavDropdown title="Apps" id="basic-nav-dropdown">
            <NavDropdown.Item {...watchList}>Watch List</NavDropdown.Item>
            <NavDropdown.Item {...listInvited}>List Invited</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
