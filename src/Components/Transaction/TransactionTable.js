import React from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap'
import transactions from '../Data/Transaction';

const TransactionTable = () => {
    return (
        <>
            <Row className="my-2">               
                <Col xs={3} lg={4} >
                    <h4>
                        Transactions
                    </h4>
                </Col>
                <Col xs={5} lg={4}>
                    <Form.Select size="sm">
                        <option>Last 5 Transactions</option>
                        <option>This month transactions</option>
                        <option>Last 50 Transactions</option>
                    </Form.Select>
                </Col>
                <Col xs={4} lg={4}>
                    <Form.Control size="sm" type="text" placeholder="Search" />
                </Col>

            </Row>

            <Table responsive bordered hover size="sm">
                <thead>
                    <tr>
                        <th className='text-muted'>
                            <strong>
                                Transaction ID
                            </strong>
                        </th>
                        <th className='text-muted'>
                            <strong>
                                Category
                            </strong>
                        </th>
                        <th className='text-muted'>
                            <strong>
                                Description
                            </strong></th>
                        <th className='text-muted'>
                            <strong>
                                From / To
                            </strong>
                        </th>
                        <th className='text-muted'>
                            <strong>
                                Date
                            </strong>
                        </th>
                        <th className='text-muted'>
                            <strong>
                                Amount
                            </strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction) => (
                            <tr>
                                <td>{transaction.id}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.fromTo}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}

export default TransactionTable
