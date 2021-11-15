import React from 'react';
import {useForm} from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const Review = () => {
    const {register, handleSubmit, reset} = useForm();
    const {user, admin} = useAuth()
    const onSubmit = data => {
        const newReview = {
            name: user?.displayName,
            email: user.email,
            feedback: data.feedback,
            rating: data.rating
        }
        axios.post(`https://desolate-atoll-72568.herokuapp.com/reviews`, newReview)
            .then(response => {
                if (response.data.insertedId) {
                    alert("Review Given Successfully")
                }
            })
        reset()
    };
    return (
        <div>
            {
                (!admin && user?.email) &&
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4 w-50 mx-auto mt-4">
                    <textarea className="form-control w-100 d-inline mt-3" placeholder="Your Feedback"
                              defaultValue="" {...register("feedback")} />
                        <small className="text-muted">Rating Should be 0 to 5.0</small>
                        <input className="form-control w-100 d-inline mt-2" placeholder="Rating"
                               defaultValue="" {...register("rating", {min: 0, max: 5.0})} />
                        <br/>
                        <button type="submit" className="btn btn-primary ms-2 mt-3">Post Review</button>
                    </form>
                </div>
            }
        </div>
    );
};

export default Review;