import React from 'react';
import {Switch, Route, Redirect} from 'react-router';


import Todo from '../views/todo';
import About from '../views/about'

export default props => {
    return(
        <Switch>
            <Route path="/todos">
                <Todo></Todo>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Redirect from='*' to='/todos'></Redirect>
        </Switch>
    )
}