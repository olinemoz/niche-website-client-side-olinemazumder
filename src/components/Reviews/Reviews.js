import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";
import {Rating} from "@mui/material";

const Reviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/reviews`)
            .then(response => {
                setReviews(response.data)
            })
    }, [])


    return (
        <div style={{marginTop: '50px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">User Reviews</h2>
            <Row>
                {
                    reviews.map(review => (
                        <Col key={review._id} xs={12} sm={12} md={6} lg={4}>
                            <Card style={{width: '95%', height: 'auto'}} className="mx-auto mt-3 shadow-lg">
                                <Card.Body>
                                    <Card.Text>
                                        <b>User: </b> <span>{review.name}</span> <br/>
                                        <b>Feedback: </b> <span>{review.feedback}</span> <br/>

                                        <div className="d-flex">
                                            <b className="me-3">Rating: </b>
                                            <Rating
                                                name="half-rating-read"
                                                defaultValue={review.rating}
                                                precision={0.1}
                                                readOnly
                                            />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Reviews;