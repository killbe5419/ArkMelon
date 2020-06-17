import React from "react";
import ReactDOM from "react-dom";
import Index from "./index.jsx";
import Template from "./template.jsx";
import _404 from "./404.jsx";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


ReactDOM.render(
    <Template>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route path="/404">
                    <_404 />
                </Route>
            </Switch>
        </Router>

    </Template>,
    document.getElementById("react-root")
)