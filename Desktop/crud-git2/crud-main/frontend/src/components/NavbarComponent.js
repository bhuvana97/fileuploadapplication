import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Movie Management System</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
   
          <Nav >
          <LinkContainer to="/allstud">

            <Nav.Link href="#features">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/addstud">

            <Nav.Link  to="/add">Add User</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">

            <Nav.Link  href="#memes">About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;