import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router} from 'react-router-dom';


import Menu from '../template/menu';
import Routes from '../main/routes';

export default props => {
    return(
        <div className='container'>
            <Router>
                <Menu></Menu>
                <Routes></Routes>
            </Router>
        </div>
    )
}
   