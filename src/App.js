import React from 'react'
import Dashboard from './Components/Dashboard'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { ArrowDownUp, BellFill, Boxes, ClipboardData, GearFill, JournalBookmarkFill, Receipt } from 'react-bootstrap-icons'
import './App.css';

const App = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='Navbar'>
        <Container>
          <Navbar.Brand href="#home" className="me-5">
            <JournalBookmarkFill />
            Bookkeeping
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Boxes className="me-1" />
                Overview
              </Nav.Link>
              <Nav.Link href="#features">
                <ArrowDownUp className="me-1" />
                Transaction</Nav.Link>
              <Nav.Link href="#pricing">
                <Receipt className="me-1" />
                Invoice</Nav.Link>
              <Nav.Link href="#pricing">
                <ClipboardData className="me-1" />
                Activity</Nav.Link>
            </Nav>
            
            <Nav>
              <Nav.Link href="#home">
                <BellFill></BellFill>
              </Nav.Link>
              <Nav.Link href="#features">
                <GearFill />
              </Nav.Link>              
              <Nav.Link href="#pricing">
                <Image src='/assets/images/user.jpg' roundedCircle height={30} width={30} />
              </Nav.Link>
            </Nav>
            </Navbar.Collapse>
          
        </Container>
      </Navbar>
      <Dashboard />
    </>
  )
}

export default App
