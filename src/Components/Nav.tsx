import React from "react";
import {
       BrowserRouter as Router,
       Routes,
       Route,
       Link
     } from "react-router-dom";

import Login from "./login/login";
import Signup from "./Register/Register";
import Homepage from './Homepage/Homepage';
function Nav()
{
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/signup' element={<Signup></Signup>}></Route>
                    <Route path='/' element={<Homepage></Homepage>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default Nav