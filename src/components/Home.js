import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    NavLink
} from "react-router-dom";
import Chart from "./Chart";

import Table from "./Table";

export default function Home() {
    return (
        <Router>
            <div className="mainDiv">
                <header className="details">
                    <h1>Made by Varun Sharma</h1>
                    <h3>8802683829 | kenwaysharma@gmail.com</h3>


                </header>

                <nav className="ContentNav">

                    <NavLink to="/table" activeClassName="active">Table</NavLink>

                    <NavLink to="/chart">Chart</NavLink>
                </nav>


            </div>

            <Switch>
                <Redirect exact from="/" to="/table" component={Table} />
                <Route path="/table"><Table /></Route>
                <Route path="/chart"><Chart /></Route>
            </Switch>

            <footer>
                <p>Made using<a href="https://reactjs.org/"> Reactjs </a>and<a href="https://www.chartjs.org/"> Chartjs </a></p>
            </footer>
        </Router>
    );


}
