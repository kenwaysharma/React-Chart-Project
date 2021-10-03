import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Chart from "./Chart";

import Table from "./Table";

export default function Home() {
    return (
        <Router>
            <div className="mainDiv">
                <div className="details">
                    <h1>Made by Varun Sharma</h1>
                    <h3>8802683829 | kenwaysharma@gmail.com</h3>


                </div>

                <nav className="ContentNav">
                    <NavLink to="/table" activeClassName="active">Table</NavLink>

                    <NavLink to="/chart">Chart</NavLink>
                </nav>
            </div>
            <Route path="/table"><Table /></Route>
            <Route path="/chart"><Chart /></Route>
        </Router>
    );


}
