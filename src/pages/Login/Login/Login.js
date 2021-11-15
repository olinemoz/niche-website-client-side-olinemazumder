import React, {useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {Button, Container, Form} from "react-bootstrap";
import {Alert, CircularProgress} from "@mui/material";

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {loginUser, isLoading, error, handleGoogleSignedIn} = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = event => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleLoginSubmit = event => {
        loginUser(loginData.email, loginData.password, location, history)
        event.preventDefault();
    }

    const handleGoogleLogin = () => {
        handleGoogleSignedIn(location, history)
    }
    return (
        <div style={{marginTop: "65px"}}>
            <Container>

                {
                    !isLoading && <Form className="p-4 mx-auto shadow-lg w-75" onSubmit={handleLoginSubmit}>
                        <h2 className="py-2">Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                className="w-100"
                                placeholder="Enter email"
                                name="email"
                                onChange={(event) => handleOnChange(event)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                className="w-100"
                                placeholder="Password"
                                name="password"
                                onChange={(event) => handleOnChange(event)}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        {
                            !isLoading &&
                            <Button variant="primary" className="ms-3" onClick={handleGoogleLogin}>Google Sign In</Button>
                        }
                          <br/>
                        <Button variant="text" onClick={() => history.push(`/register`)}>
                            Not Yet Registered? <span style={{textDecoration: "underline"}}>Please Register</span>
                        </Button>
                    </Form>
                }

                {
                    isLoading && <CircularProgress/>
                }
                {/*{*/}
                {/*    user?.email && <Alert severity="success">Login Successfully!</Alert>*/}
                {/*}*/}
                {
                    error && <Alert severity="error">{error}</Alert>
                }
            </Container>
        </div>
    );
};

export default Login;