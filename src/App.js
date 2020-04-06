import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/router/PrivateRoute";
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import Home from './pages/home/home';
import NotFound from './pages/error/notFound';

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' exact component={Login}/>
                    <PrivateRoute path='/home' exact><Home/></PrivateRoute>
                    <PrivateRoute path='/admin' exact><Admin/></PrivateRoute>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }

}