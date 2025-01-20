import React from 'react'
import './Summary.css'
import { Col, Row } from 'react-bootstrap'
import { ArrowDown, ArrowUp, Plus } from 'react-bootstrap-icons'

const Summary = () => {
    return (
        <>  
            <div className='my-3'>
            <h1>Welcome, Jennifer</h1>
            <p>Thanks for coming back. Take a look at yoour Summary.</p>
            <Row className='text-center bg-light rounded py-3 my-2'>
                <Col className='rightBorder px-3'>
                <Plus size={25} className='text-primary'/> Total Balance
                    <h2 className='text-primary'>₹16,34,267.79</h2>
                </Col>
                <Col className='rightBorder px-3 '>
                <ArrowDown size={15} className='text-success'/>  Total Income
                    <h2 className='text-success'>₹1,54,789.00</h2>
                </Col>
                <Col className='px-3'>
                <ArrowUp size={15} className='text-danger'/>  Total Expence
                    <h2 className='text-danger'>₹1,89,235.00</h2>
                </Col>
            </Row>
            </div>
        </>
    )
}

export default Summary
