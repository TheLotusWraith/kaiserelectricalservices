import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationMenu() {

    return (
        <Navbar sticky="top">
            <Container>
                <Navbar.Brand href="#home">Kaiser Electrical Services</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">Who We Are</Nav.Link>
                    <NavDropdown title="Electrical Services">
                        <NavDropdown.Item href="#new-construction-electrical">New Construction Electrical</NavDropdown.Item>
                        <NavDropdown.Item href="#residential-electrical-service">Residential Electrical</NavDropdown.Item>
                        <NavDropdown.Item href="#commercial-electrical-service">Commercial Electrical</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#where-we-serve">Where We Operate</Nav.Link>
                    <Nav.Link href="#contact">Get in Touch</Nav.Link>
                    <Nav.Link href="#tel:9369333604">Call Us</Nav.Link>
                </Nav>
            </Container>
        </ Navbar>
    );
}

export default NavigationMenu;
