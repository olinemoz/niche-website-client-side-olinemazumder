import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import ExploreProducts from "./pages/ExploreProducts/ExploreProducts";
import Purchase from "./pages/Purchase/Purchase";


function App() {
    return (
        <AuthProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}>
                        <Redirect to="/"/>
                    </Route>
                    <Route exact path="/explore" component={ExploreProducts}/>
                    <PrivateRoute path="/purchase/:purchasedId">
                        <Purchase/>
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                        <Dashboard/>
                    </PrivateRoute>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
