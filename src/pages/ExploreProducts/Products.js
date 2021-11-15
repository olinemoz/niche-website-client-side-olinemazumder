import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Products = ({product}) => {
    const {_id, name, image, price, description} = product
    const history = useHistory()
    const purchaseItem = () => {
        history.push(`/purchase/${_id}`)
    }
    return (
        <Card style={{width: '95%', height: 'auto'}} className="mx-auto mt-3">
            <Card.Img variant="top" src={image} style={{height: '280px'}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <b>Price:</b> {price} <br/>
                    <b>Description: </b>{description.slice(0, 120)}
                </Card.Text>
                <Button variant="primary" onClick={purchaseItem}>Order Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Products;