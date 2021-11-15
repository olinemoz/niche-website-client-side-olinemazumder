import React, {useEffect} from 'react';
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import Products from "./Products";

const ExploreProducts = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/cars`)
            .then(response => setProducts(response.data))
    }, [])
    return (
        <div style={{marginTop: "75px"}}>
            <Row>
                {
                    products.map(product => (
                        <Col key={product._id} xs={12} sm={12} md={6} lg={4}>
                            <Products product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default ExploreProducts;