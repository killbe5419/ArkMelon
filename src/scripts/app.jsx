import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Index from "./pages/index.jsx";
import _404 from "./pages/404.jsx";
import TemplatePage from "./pages/templatePage.jsx";
import RegularPool from "./pages/RegularPool.jsx";
import EventPool from "./pages/eventPool.jsx";
import LimitPool from "./pages/limitPool.jsx";
import Pickcard from "./pages/pickcard.jsx";

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
                    <Route exact path="/regularPool">
                        <RegularPool
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                        />
                    </Route>
                    <Route exact path="/eventPool">
                        <EventPool
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                        />
                    </Route>
                    <Route path="/eventPool/unbound_reflux">
                        <Pickcard
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                            poolType = "eventPool"
                            poolName = "不羁逆流"
                        />
                    </Route>
                    <Route exact path="/limitPool">
                        <LimitPool
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
    <App />,
    document.getElementById("react-root")
)