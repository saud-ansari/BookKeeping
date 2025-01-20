import React from 'react'
import Summary from './SummaryCard/Summary'
import { Col, Container, Row } from 'react-bootstrap'
import TransactionTable from './Transaction/TransactionTable'

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
        <TransactionTable />

      </Container>
    </>
  )
}

export default Dashboard
