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
  googleSheets,
}) => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Navbar.Brand {...home} className="ml-3">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link {...home}>Home</Nav.Link>
          <NavDropdown title="Tables" id="basic-nav-dropdown">
            <NavDropdown.Item {...table}>Table</NavDropdown.Item>
            <NavDropdown.Item {...filter}>Filter</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Components" id="basic-nav-dropdown">
          <NavDropdown.Item {...map}>Google Map</NavDropdown.Item>
            <NavDropdown.Item {...radioImage}>Radio Image</NavDropdown.Item>
            <NavDropdown.Item {...radioImage2}>Radio Image2</NavDropdown.Item>
            <NavDropdown.Item {...profile}>Profile</NavDropdown.Item>
            <NavDropdown.Item {...friends}>Friends</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="Apps" id="basic-nav-dropdown">
            <NavDropdown.Item {...googleSheets}>Google Sheets</NavDropdown.Item>
            <NavDropdown.Item {...todo}>Todo</NavDropdown.Item>
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
