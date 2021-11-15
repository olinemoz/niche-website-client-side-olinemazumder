import React from 'react';
import {Navbar} from "react-bootstrap";

const Footer = () => {
    return (
        <div style={{marginTop: "100px"}}>
            <Navbar bg="dark" fixed="bottom" className="text-white">
                <div className="d-flex mx-auto">
                    <p> &copy; Car Sales BD Copyright 2021</p>
                </div>
            </Navbar>
        </div>
    );
};

export default Footer;