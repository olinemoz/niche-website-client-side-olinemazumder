import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/cars`)
            .then(res => setProducts(res.data))
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure you want to delete this Order ?")
        if (proceed) {
            axios.delete(`https://desolate-atoll-72568.herokuapp.com/cars/${id}`)
                .then(response => {
                    if (response.data.deletedCount > 0) {
                        const restProducts = products.filter(product => product._id !== id)
                        setProducts(restProducts)
                        alert("Product deleted successfully!")
                    }
                })
        }
    }
    return (
        <div>
            {products.length > 0 ?
                <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Manage Products</h2> : ''}
            {
                products.length === 0 ?
                    <h2 className="text-center text-danger mx-auto mt-5">No Orders
                        Found!</h2> : ''
            }
            {
                products.map(product => (
                    <div key={product._id}>
                        <div className="py-3 mt-4 mx-5 rounded shadow-lg px-4">
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={7}>
                                    <h6 className="ms-2 d-inline"><b>Product: </b>{product.name}</h6>
                                </Col>
                                <Col xs={9} sm={9} md={10} lg={3}>
                                    <p className="ms-2 d-inline"><b>Price:</b> {product.price}/-</p>
                                </Col>
                                <Col xs={3} sm={3} md={2} lg={2}>
                                    <button onClick={() => handleDeleteOrder(product._id)}
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

export default ManageProducts;