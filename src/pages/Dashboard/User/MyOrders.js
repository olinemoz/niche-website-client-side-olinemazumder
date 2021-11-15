import React, {useEffect, useState} from 'react';
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const {user} = useAuth()

    useEffect(() => {
        axios.get(`https://desolate-atoll-72568.herokuapp.com/orders/${user.email}`)
            // .then(response => setOrders(response.data.filter(orders => orders.email === user.email)))
            .then(res => setOrders(res.data))
    }, [user.email])

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
    return (
        <div>
            {orders.length > 0 ?
                <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">My Orders</h2> : ''}
            {
                orders.length === 0 ?
                    <h2 className="text-center text-danger mx-auto mt-5">No Orders
                        Found!</h2> : ''
            }
            {
                orders.map(order => (
                    <div key={order._id}>
                        <div className="py-3 mt-4 mx-5 rounded shadow-lg px-2">
                            <h6 className="ms-5 d-inline">{order.ProductName}</h6>
                            <h6 className="ms-5 d-inline">Price: {order.price} Tk BDT/-</h6>
                            <button onClick={() => handleDeleteOrder(order._id)}
                                    className="d-block btn btn-danger ms-auto">Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyOrders;