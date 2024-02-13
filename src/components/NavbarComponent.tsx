import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
        <header>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Board App</Navbar.Brand>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavbarComponent;
