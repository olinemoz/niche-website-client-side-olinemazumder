import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import {useHistory} from "react-router-dom";
import {Alert, CircularProgress} from "@mui/material";

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {registerUser, isLoading, error} = useAuth()
    const history = useHistory()

    const handleOnChange = event => {
        const name = event.target.name
        const value = event.target.value

        setLoginData({
            ...loginData,
            [name]: value
        })
    }
    const handleRegistration = event => {
        if (loginData.password !== loginData.password2) {
            alert('password did not matched! try again.')
            return
        }
        registerUser(loginData.email, loginData.password, history, loginData.username)
        event.preventDefault();
    }
    return (
        <div style={{marginTop: "65px"}}>
            <Container>
                {
                    !isLoading &&
                    <Form onSubmit={handleRegistration} className="p-4 mx-auto shadow-lg w-75">
                        <h2 className="py-2">Register</h2>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                onChange={(event) => handleOnChange(event)}
                                required
                                className="w-100"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={(event) => handleOnChange(event)}
                                required
                                className="w-100"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={(event) => handleOnChange(event)}
                                required
                                className="w-100"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="password2"
                                onChange={(event) => handleOnChange(event)}
                                required
                                className="w-100"
                            />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Register
                        </Button>

                        <Button variant="text" onClick={() => history.push(`/login`)}>
                            Already Registered? <span style={{textDecoration: "underline"}}>Please Login</span>
                        </Button>
                    </Form>
                }
                {
                    isLoading && <CircularProgress/>
                }
                {/*{*/}
                {/*    user?.email && <Alert severity="success">User Created Successfully!</Alert>*/}
                {/*}*/}
                {
                    error && <Alert severity="error">{error}</Alert>
                }
            </Container>
        </div>
    );
};

export default Register;