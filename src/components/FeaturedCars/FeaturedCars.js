import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const FeaturedCars = () => {
    const [featuredCars, setFeaturedCars] = useState([])
    const history = useHistory()

    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/cars`)
            .then(res => {
                setFeaturedCars(res.data.slice(0, 6))
            })
    }, [])
    return (
        <div style={{marginTop: '50px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Featured Cars</h2>

            <Row>
                {
                    featuredCars.map(car => {
                        return (
                            <div className="col-md-4 mb-4" key={car._id}>
                                <Card style={{width: '95%', height: '440px'}} className="mx-auto mt-3">
                                    <Card.Img variant="top" src={car.image} style={{height: '200px'}}/>
                                    <Card.Body>
                                        <Card.Title>{car.name}</Card.Title>
                                        <Card.Text>
                                            <b>Price:</b> {car.price} <br/>
                                            <b>Description: </b>{car.description.slice(0, 120)}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => history.push(`/purchase/${car._id}`)}>
                                            Order Now
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </Row>
        </div>
    );
};

export default FeaturedCars;