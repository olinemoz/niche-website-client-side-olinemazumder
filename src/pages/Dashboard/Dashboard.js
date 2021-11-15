import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import {Button} from '@mui/material';
import MakeAdmin from "./AdminPower/MakeAdmin";
import useAuth from "../../hooks/useAuth";
import AdminRoleRoute from "../Login/AdminRoute/AdminRoleRoute";
import DashboardHome from "./DashboardHome";
import ManageAllOrders from "./AdminPower/ManageAllOrders";
import ManageProducts from "./AdminPower/ManageProducts";
import MyOrders from "./User/MyOrders";
import PrivateRoute from "../Login/PrivateRoute/PrivateRoute";
import Pay from "./User/Pay";
import AddProduct from "./AdminPower/AddProduct";
import Review from "./User/Review";


const drawerWidth = 220;

function Dashboard(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let {path, url} = useRouteMatch();
    const {admin, logOut, user} = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <NavLink to={`${url}`} style={{textDecoration: 'none', color: 'black'}}>
                <Button color="inherit">Dashboard</Button>
            </NavLink>
            {
                (!admin && user?.email) && <Box>
                    <NavLink to={`/`} style={{textDecoration: 'none', color: 'black'}}>
                         <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink to={`${url}/myOrders`} style={{textDecoration: 'none', color: 'black'}}>
                       <br/> <Button color="inherit">My Orders</Button>
                    </NavLink>
                    <NavLink to={`${url}/pay`} style={{textDecoration: 'none', color: 'black'}}>
                        <br/> <Button color="inherit">Pay</Button>
                    </NavLink>
                    <NavLink to={`${url}/review`} style={{textDecoration: 'none', color: 'black'}}>
                        <br/> <Button color="inherit">Review</Button>
                    </NavLink>
                </Box>
            }

            {
                (admin && user?.email) && <Box>
                    <NavLink to={`${url}/makeAdmin`} style={{textDecoration: 'none', color: 'black'}}>
                        <Button color="inherit">Make Admin</Button>
                    </NavLink>
                    <NavLink to={`${url}/addProduct`} style={{textDecoration: 'none', color: 'black'}}>
                        <Button color="inherit">Add Product</Button>
                    </NavLink>
                    <NavLink to={`${url}/manageAllOrders`} style={{textDecoration: 'none', color: 'black'}}>
                        <Button color="inherit">Manage All Orders</Button>
                    </NavLink><NavLink to={`${url}/manageProducts`} style={{textDecoration: 'none', color: 'black'}}>
                    <Button color="inherit">Manage Products</Button>
                </NavLink>
                </Box>
            }
            <NavLink to={`${url}`} style={{textDecoration: 'none', color: 'black'}}>
                <Button color="inherit" onClick={logOut}>Log Out</Button>
            </NavLink>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
                style={{padding: "3px 0"}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome/>
                    </Route>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrders/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay/>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review/>
                    </PrivateRoute>


                    <AdminRoleRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin/>
                    </AdminRoleRoute>
                    <AdminRoleRoute path={`${path}/addProduct`}>
                        <AddProduct/>
                    </AdminRoleRoute>
                    <AdminRoleRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders/>
                    </AdminRoleRoute>
                    <AdminRoleRoute path={`${path}/manageProducts`}>
                        <ManageProducts/>
                    </AdminRoleRoute>
                </Switch>

            </Box>
        </Box>
    );
}


export default Dashboard;