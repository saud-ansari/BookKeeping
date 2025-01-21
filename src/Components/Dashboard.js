import React from 'react'
import Summary from './SummaryCard/Summary'
import { Col, Container, Row } from 'react-bootstrap'
import TransactionTable from './Transaction/TransactionTable'
import TransactionChart from './Chart/TransactionChart'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className='summary-section'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={7}>
              <Summary />
            </Col>
            <Col sm={12} md={12} lg={5}>
              <TransactionChart />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='transaction-section'>
        <Container>
          <Row>
            <Col>
              <TransactionTable />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dashboard
