import React from 'react';
import './Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Home.css';


export function Menu() {
  return (
    <>


      {/* <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Krishna</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link to='/'><li class="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              </Link>
              <Link to='/About'><li class="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              </Link>
              <Link to='/Skills'>
                <li className="nav-item">
                  <a className="nav-link " href="#Skills" >Skills</a>
                </li>
              </Link>
              <Link to='/Certificates'>
                <li className="nav-item">
                  <a className="nav-link " href="#Certificates" >Certificates</a>
                </li>
              </Link>
              <Link to='/Contact'>
                <li className="nav-item">
                  <a className="nav-link " href="#Contact" >Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav> */}

      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" className="bg-body-tertiary hai">
        <Container fluid>
          <Navbar.Brand href="#" >Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#certificates">Certificates</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
