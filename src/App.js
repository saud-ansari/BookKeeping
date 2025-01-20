import React from 'react'
import Dashboard from './Components/Dashboard'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { ArrowDownUp, BellFill, Boxes, ClipboardData, GearFill, Receipt } from 'react-bootstrap-icons'
//import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="me-5">Bookkeeping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Boxes className="me-1"/>
              Overview
              </Nav.Link>
            <Nav.Link href="#features">
            <ArrowDownUp className="me-1"/>
            Transaction</Nav.Link>
            <Nav.Link href="#pricing">
            <Receipt className="me-1"/>
            Invoice</Nav.Link>            
            <Nav.Link href="#pricing">
            <ClipboardData className="me-1"/>
            Activity</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">
              <BellFill></BellFill>
            </Nav.Link>
            <Nav.Link href="#features">
              <GearFill/>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Image src='/assets/images/user.jpg' roundedCircle height={30} width={30}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Dashboard />
    </>
  )
}

export default App
