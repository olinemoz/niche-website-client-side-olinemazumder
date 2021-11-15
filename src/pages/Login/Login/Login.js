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
        <div className="w-50 mx-auto p-4 shadow-lg" style={{marginTop: "65px"}}>
            <Container>
                <h2>Login</h2>
                {
                    !isLoading && <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={(event) => handleOnChange(event)}
                                required
                                style={{
                                    width: "75%"
                                }}
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
                                style={{
                                    width: "75%"
                                }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>

                        <Button variant="text" onClick={() => history.push(`/register`)}>
                            Not Yet Registered? <span style={{textDecoration: "underline"}}>Please Register</span>
                        </Button>
                    </Form>
                }
                <br/>
                {
                    !isLoading &&
                    <Button variant="primary" onClick={handleGoogleLogin}>Google Sign In</Button>
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