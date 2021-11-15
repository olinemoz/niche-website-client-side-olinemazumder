import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";
import useAuth from "../../hooks/useAuth";


const Purchase = () => {
    const [carProduct, setCarProduct] = useState({})
    const {register, handleSubmit, reset} = useForm();
    const {user} = useAuth()
    const {purchasedId} = useParams()

    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/cars/${purchasedId}`)
            .then(response => setCarProduct(response.data))
    }, [purchasedId])

    const onSubmit = data => {
        const newOrder = {
            ProductName: carProduct.name,
            price: carProduct.price,
            name: user?.displayName,
            email: user.email,
            phone: data.phone,
            address: data.address,
            orderStatus: 'pending'
        }

        axios.post(`https://desolate-atoll-72568.herokuapp.com/orders`, newOrder)
            .then(response => {
                if (response.data.insertedId) {
                    alert("Order Placed Successfully")
                }
            })
        reset()
    };


    return (
        <div style={{marginTop: '80px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Order Page</h2>

            <div className="mx-auto shadow-lg p-4 w-75">
                <h3 className="text-center my-2 bg-success py-3 text-white rounded">Product Details</h3>
                <h4 className="my-3 text-center">{carProduct.name}</h4>
                <img src={carProduct.image} alt="" className="d-block w-50 h-25 mx-auto"/> <br/>
                <p className="text-center">
                    <b>Description: </b>{carProduct.description}
                </p>
                <div className="">
                    <h3 className="my-2 text-success py-3 rounded">Purchase Details:</h3>
                    <h6 className="text-center d-inline">
                        Name:
                    </h6> <span>{user.displayName}</span> <br/>
                    <h6 className="text-center d-inline">
                        Email:
                    </h6> <span>{user.email}</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control w-50 d-inline mt-3" placeholder="Your Number"
                           defaultValue="" {...register("phone")} />
                    <br/>
                    <input className="form-control w-50 d-inline mt-3" placeholder="Your Address"
                           defaultValue="" {...register("address")} /> <br/> <br/>
                    <button type="submit" className="btn btn-primary ms-2">Place Order</button>
                </form>
            </div>
        </div>
    );
};

export default Purchase;