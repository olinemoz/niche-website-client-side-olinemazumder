import React from 'react';

const AboutUs = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <h2 className="mb-4 bg-primary py-3 text-white text-center mx-2 rounded">About Us</h2>

            <div className="d-block shadow-lg w-75 p-4 mx-auto text-center">
                <h3 className="text-dark">Car Sales BD</h3>
                <h5 className="text-dark">Car Shop and Production Company LTD.</h5>
                <h6>Contact Us: </h6>
                <p><b>Email:</b> carsalesbd@gmail.com <br/>
                    <b>Phone:</b> 024473829299 <br/>
                    <b>Hours: </b> 10.00am to 10.00pm
                </p>
            </div>
        </div>
    );
};

export default AboutUs;