import React from 'react'
import Summary from './SummaryCard/Summary'
import { Col, Container, Row } from 'react-bootstrap'


const Dashboard = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            <Summary />
          </Col>
          <Col>
          </Col>
        </Row>
       

      </Container>
    </>
  )
}

export default Dashboard
