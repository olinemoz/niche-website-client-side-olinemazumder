import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])


    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/orders`)
            .then(res => setOrders(res.data))
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure you want to delete this Order ?")
        if (proceed) {
            axios.delete(`https://desolate-atoll-72568.herokuapp.com/orders/${id}`)
                .then(response => {
                    if (response.data.deletedCount > 0) {
                        const restOrders = orders.filter(order => order._id !== id)
                        setOrders(restOrders)
                        alert("Order deleted successfully!")
                    }
                })
        }
    }

    const handleUpdateOrder = id => {
        const updateOrder = {
            orderStatus: 'Approved'
        }
        axios.put(`https://desolate-atoll-72568.herokuapp.com/orders/${id}`, updateOrder)
            .then(response => {
                if (response.data.modifiedCount) {
                    alert('Order has been Approved')
                    window.location.reload()
                }
            })
    }

    return (
        <div>
            {orders.length > 0 ?
                <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Manage All Orders</h2> : ''}
            {
                orders.length === 0 ?
                    <h2 className="text-center text-danger mx-auto mt-5">No Orders
                        Found!</h2> : ''
            }
            {
                orders.map(order => (
                    <div key={order._id}>
                        <div className="py-3 mt-4 mx-5 rounded shadow-lg">
                            <Row>
                                <Col>
                                    <h6 className="ms-2 d-inline"><b>User: </b>{order.name}</h6>
                                </Col>
                                <Col>
                                    <p className="ms-2 d-inline"><b>Product:</b> {order.ProductName}</p>
                                </Col>
                                <Col>
                                    <p className="ms-2 d-inline"><b>Price:</b> {order.price}/-</p>
                                </Col>
                            </Row>

                            <br/> <br/>

                            <Row>
                                <Col xs={12} sm={12} md={9}>
                                    <p className="ms-3 d-inline">Order Status: {
                                        order.orderStatus === 'pending' ? <span
                                            className="bg-secondary p-2 rounded text-white">
                                        {order.orderStatus}
                                    </span> : <span
                                            className="bg-primary p-2 rounded text-white">
                                        {order.orderStatus}
                                    </span>
                                    }
                                    </p>
                                </Col>
                                <Col xs={12} sm={12} md={3}>
                                    <button onClick={() => handleUpdateOrder(order._id)}
                                            className="btn btn-outline-info  mx-2 mt-3 mt-md-0">Update
                                    </button>
                                    <button onClick={() => handleDeleteOrder(order._id)}
                                            className="btn btn-danger mt-3 mt-md-0">Delete
                                    </button>
                                </Col>
                            </Row>


                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageAllOrders;