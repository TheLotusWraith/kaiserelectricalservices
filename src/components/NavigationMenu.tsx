import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.css';

function NavigationMenu() {
    const location = useLocation();

    return (
        <Navbar sticky="top" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">Kaiser Electrical Services</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                        Who We Are
                    </Nav.Link>
                    <NavDropdown title="Electrical Services">
                        <NavDropdown.Item as={Link} to="/new-construction">New Construction Electrical</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/residential">Residential Electrical</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/commercial">Commercial Electrical</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/service-area" className={location.pathname === '/service-area' ? 'active' : ''}>
                        Where We Operate
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                        Get in Touch
                    </Nav.Link>
                    <Nav.Link href="tel:9369333604" className="call-button">Call Us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationMenu;
