import React from 'react'
import { Table } from 'react-bootstrap'
import transactions from '../Data/Transaction';

const TransactionTable = () => {
    return (
        <>
            <Table responsive bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>From / To</th>
                        <th>Date</th>
                        <th>Amount</th>
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
