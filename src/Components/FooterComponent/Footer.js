
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { Collection, Facebook, Instagram, JournalBookmarkFill, Linkedin, Twitter } from 'react-bootstrap-icons';

const Footer = () => (
  <footer className="py-4 border-top" >
    <Container>
      <Row>
        <Col xs={12} md={4} className="mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="links">Home</a></li>
            <li><a href="/add-transaction" className="links">Add Transaction</a></li>
            <li><a href="/profit-loss" className="links">Profit & Loss</a></li>
            <li><a href="/balance-sheet" className="links">Balance Sheet</a></li>
          </ul>
        </Col>

        <Col xs={12} md={4} className="mb-3 text-center">
          <h5>Follow Us</h5>
          <div className="d-flex justify-content-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3 links">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3 links">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="me-3 links">
              <Linkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="links">
              <Instagram />
            </a>
          </div>
        </Col>

        <Col xs={12} md={4} className="text-center text-md-end">
          <h5 style={{color:'#FCD260'}}><JournalBookmarkFill/>Bookkeeping</h5>
          <p className="links mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
