import React from 'react';
import{
   Route,
   Switch,
}from 'react-router-dom';
import Home from './Home.jsx';
import Page from './Pages.jsx';
import Profile from './Profile.jsx';
import Post from './Post.jsx';
import Error404 from './Error404.jsx';

function Pages(){
    return(
        <main role="application">
            <Switch>
                {/*Lista articulos*/}
                <Route
                    path="/"
                    exact
                    component={Home}
                />
                {/*Detalle de articulos*/}
                <Route
                    path="/post/:id"
                    exact
                    component={Post}
                />
                <Route
                    path="/user/:id"
                    exact
                    component={Profile}
                />
                <Route component={Error404}/>
            </Switch>
        </main>
    );
}
export default Pages;