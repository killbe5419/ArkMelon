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
import checkThemeCookie from "./tools/checkThemeCookie";
import checkLanguageCookie from "./tools/checkLanguageCookie";

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
                    <Route path="/eventPool/spiral_sinking">
                        <Pickcard
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                            poolType = "eventPool"
                            poolName = "流沙涡旋"
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
                    <Route path="/eventPool/heart_of_steel_the_rage_ironhide">
                        <Pickcard
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                            poolType = "eventPool"
                            poolName = "燃钢之心 暴躁铁皮"
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
                    <Route path="/limitPool/earthborn_metals">
                        <Pickcard
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                            poolType = "limitPool"
                            poolName = "地生五金"
                        />
                    </Route>
                    <Route path="/limitPool/lastwish_cremation">
                        <Pickcard
                            language = { this.state.language }
                            theme = { this.state.theme }
                            toDarkTheme = { this.toDarkTheme }
                            toLightTheme = { this.toLightTheme }
                            toZH_CN = { this.toZH_CN }
                            toEN_US = { this.toEN_US }
                            toJA_JP = { this.toJA_JP }
                            poolType = "limitPool"
                            poolName = "遗愿焰火"
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