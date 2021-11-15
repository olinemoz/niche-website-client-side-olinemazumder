import React from 'react';
import useAuth from "../../../hooks/useAuth";
import {CircularProgress} from "@mui/material";
import {Redirect, Route} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const AdminRoleRoute = ({children, ...rest}) => {
    const {user, admin, isLoading} = useAuth()
    if (isLoading) {
        return <CircularProgress/>
    }
    if(!admin){
        return <Spinner animation="border" role="status"/>
    }
    return (
        <Route
            {...rest}
            render={
                ({location}) => (user.email && admin) ? children : <Redirect to={{
                    pathname: "/dashboard",
                    state: {from: location}
                }}/>
            }
        />
    );
};

export default AdminRoleRoute;