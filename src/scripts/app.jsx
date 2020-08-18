import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Index from "./pages/index.jsx";
import _404 from "./pages/404.jsx";
import TemplatePage from "./pages/templatePage.jsx";

function checkThemeCookie() {
    if(document.cookie.length === 0) {
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "dark-theme";
    } else {
        let cookieArr = document.cookie.split(";");
        for(let i=0;i<cookieArr.length;i++) {
            if(cookieArr[i].split("=")[0].trim() === "theme") {
                return cookieArr[i].split("=")[1];
            }
        }
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "dark-theme";
    }
}

function checkLanguageCookie() {
    if(document.cookie.length === 0) {
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "zh-cn";
    } else {
        const cookieArr = document.cookie.split(";");
        for(let i=0;i<cookieArr.length;i++) {
            if(cookieArr[i].split("=")[0].trim() === "language") {
                return cookieArr[i].split("=")[1];
            }
        }
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        return "zh-cn";
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: checkThemeCookie(),
            language: checkLanguageCookie()
        }
    }

    toDarkTheme = () => {
        console.log("to-dark");
        document.cookie = "theme=dark-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        this.setState({
            theme: "dark-theme"
        })
    }

    toLightTheme = () => {
        console.log("to-light");
        document.cookie = "theme=light-theme;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        this.setState({
            theme: "light-theme"
        })
    }

    toZH_CN = () => {
        console.log("change language to zh-cn");
        document.cookie = "language=zh-cn;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        this.setState({
            language: "zh-cn"
        })
    }

    toEN_US = () => {
        console.log("change language to en-us");
        document.cookie = "language=en-us;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        this.setState({
            language: "en-us"
        })
    }

    toJA_JP = () => {
        console.log("change language to ja-jp");
        document.cookie = "language=ja-jp;expires= Thu, 18 Dec 2043 12:00:00 GMT;path=/";
        this.setState({
            language: "ja-jp"
        })
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Index
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                        />
                    </Route>
                    <Route path="/*">
                        <TemplatePage
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                        />
                    </Route>
                    <Route path="/404">
                        <_404 />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(
    /* <Router>
        <Switch>
            <Route exact path="/">
                <Index language="zh-cn" />
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
    */
    <App />,
    document.getElementById("react-root")
)