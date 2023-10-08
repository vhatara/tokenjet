import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import tokenjet from '../../Images/Logo/tokenjet.png'

const NavBar = () => {
  return (
    <Navbar expand="lg" className='fixed-top'>
      <Container>
        <Navbar.Brand href="#home">
          <img src={tokenjet} alt='tokenjet' title='Token Jet' className='me-3'/>
          Token<span>Jet</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='mx-auto'>Home</Nav.Link>
            <Nav.Link href="#market" className='mx-auto'>Market</Nav.Link>
            <Nav.Link href="#choose-us" className='mx-auto'>Choose Us</Nav.Link>
            {/* <Nav.Link href="#join-us" className='mx-auto'>Join</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar