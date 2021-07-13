import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const Navigation = ({
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
}: {
  home: any;
  table: any;
  filter: any;
  map: any;
  todo: any;
  radioImage: any;
  radioImage2: any;
  friends: any;
  profile: any;
  watchList: any;
}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
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
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
