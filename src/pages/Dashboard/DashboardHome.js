import React from 'react';
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1 className="text-center text-success">Hello {user?.displayName}!</h1>
        </div>
    );
};

export default DashboardHome;