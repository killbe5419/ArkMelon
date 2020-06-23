import React from "react";
import ReactDOM from "react-dom";
import Index from "./index.jsx";
import Template from "./template.jsx";
import _404 from "./404.jsx";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Index language="zh-cn" />
            </Route>
            <Route exact path="/zh-cn">
                <Index language="zh-cn" />
            </Route>
            <Route path="/zh-cn/:a">
                <Index language="en-us" />
            </Route>
            <Route path="/ja-jp">
                <Index language="ja-jp"/>
            </Route>
            <Route exact path="/en-us">
                <Index language="en-us"/>
            </Route>
            <Route path="/404">
                <_404 />
            </Route>
        </Switch>
    </Router>,
    document.getElementById("react-root")
)