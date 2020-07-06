import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Index from "./pages/index.jsx";
import _404 from "./pages/404.jsx";
import TemplatePage from "./pages/templatePage.jsx";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/">
                <Index language="ja-jp" />
            </Route>
            <Route exact path="/zh-cn">
                <Index language="zh-cn" />
            </Route>
            <Route path="/zh-cn/*">
                <TemplatePage language="zh-cn" />
            </Route>
            <Route exact path="/ja-jp">
                <Index language="ja-jp"/>
            </Route>
            <Route path="/ja-jp/*">
                <TemplatePage language="ja-jp" />
            </Route>
            <Route exact path="/en-us/">
                <Index language="en-us"/>
            </Route>
            <Route path="/en-us/*">
                <TemplatePage language="en-us" />
            </Route>
            <Route path="/404">
                <_404 />
            </Route>
        </Switch>
    </Router>,
    document.getElementById("react-root")
)