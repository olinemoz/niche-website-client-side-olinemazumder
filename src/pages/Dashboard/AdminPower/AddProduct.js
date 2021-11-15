import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";


const AddProduct = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        const newProduct = data
        axios.post(`https://desolate-atoll-72568.herokuapp.com/cars`, newProduct)
            .then(response => {
                if (response.data.insertedId) {
                    alert("New Product Added Successfully")
                }
            })
        console.log("New Product", newProduct)
        reset()
    }

    return (
        <div>

            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4 w-75 mx-auto">
                    <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">Add Product</h2>

                    <input placeholder="Product Name"
                           className="form-control" {...register("name", {required: true, maxLength: 30})} /> <br/>
                    <input placeholder="Image URL" className="form-control" {...register("image", {required: true})} />
                    <br/>
                    <input placeholder="Price" className="form-control"
                           {...register("price", {required: true})} /> <br/>
                    <textarea placeholder="Description" className="form-control" {...register("description")} /> <br/>
                    <button type="submit" className="btn btn-primary ms-3">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;