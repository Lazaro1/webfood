
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import AppBar from './components/AppBar';
import Products from './pages/CreateProducts';
import Home from './pages/Home'
import Login from './pages/Login';


function Routes() {
    return(
        <BrowserRouter>
            <AppBar />
            <Switch>
                <Route exact path="/webfood" component={Home}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Produtos" component={Products}/>
            </Switch>    
        </BrowserRouter>
    );
}

export default Routes;