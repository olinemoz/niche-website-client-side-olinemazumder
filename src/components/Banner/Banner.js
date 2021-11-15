import React from 'react';

const Banner = () => {
    return (
        <div className="p-4 shadow-lg" style={{marginTop: "60px", marginBottom: "20px"}}>
            <h3 className="text-center bg-primary py-3 rounded text-white">Best Car Shop Company in Bangladesh</h3>
            <img className="d-block w-75 mx-auto mt-3"
                 src="https://i.ibb.co/HzXvnrV/banner.jpg" alt=""/>
        </div>
    );
};

export default Banner;