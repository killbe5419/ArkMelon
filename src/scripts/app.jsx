import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Index from "./pages/index.jsx";
import _404 from "./pages/404.jsx";
import TemplatePage from "./pages/templatePage.jsx";
import ShowPool from "./pages/showPool.jsx";
import Pickcard from "./pages/pickcard.jsx";
import checkThemeCookie from "./tools/checkThemeCookie";
import checkLanguageCookie from "./tools/checkLanguageCookie";
import Test from "./pages/test.jsx";

class MainRouter extends React.Component {
    makePickSimuRouter = (array) => {
        return array.map(x =>
            <Route path={ x.url } key={`${x.type}${x.code}`}>
                <Pickcard
                    language = { this.props.language }
                    theme = { this.props.theme }
                    toDarkTheme = { this.props.toDarkTheme }
                    toLightTheme = { this.props.toLightTheme }
                    toZH_CN = { this.props.toZH_CN }
                    toEN_US = { this.props.toEN_US }
                    toJA_JP = { this.props.toJA_JP }
                    poolType = { x.type }
                    poolName = { x.name }
                    poolCode = { x.url.split("/")[2] }
                    poolList = { this.props.poolList }
                />
            </Route>
        )
    }

    makePickSimuRootRouter = (array) => {
        return array.map (x =>
            <Route exact path={`/${ x }`} key={ x }>
                <ShowPool
                    language = { this.props.language }
                    theme = { this.props.theme }
                    toDarkTheme = { this.props.toDarkTheme }
                    toLightTheme = { this.props.toLightTheme }
                    toZH_CN = { this.props.toZH_CN }
                    toEN_US = { this.props.toEN_US }
                    toJA_JP = { this.props.toJA_JP }
                    poolList = { this.props.poolList }
                    poolType= { x }
                />
            </Route>
        )
    }


    render() {
        const pickSimuPoolArray = this.props.poolList.event.concat(this.props.poolList.limit).concat(this.props.poolList.regular);
        const pickSimuPoolList = this.makePickSimuRouter(pickSimuPoolArray);
        const pickSimuRootArray = ["regularPool","limitPool","eventPool"];
        const pickSimuRootList = this.makePickSimuRootRouter(pickSimuRootArray);
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Index
                            language = { this.props.language }
                            theme = { this.props.theme }
                            toDarkTheme = { this.props.toDarkTheme }
                            toLightTheme = { this.props.toLightTheme }
                            toZH_CN = { this.props.toZH_CN }
                            toEN_US = { this.props.toEN_US }
                            toJA_JP = { this.props.toJA_JP }
                        />
                    </Route>
                    { pickSimuRootList }
                    { pickSimuPoolList }
                    <Route path="/test">
                        <Test />
                    </Route>
                    <Route path="/*">
                        <TemplatePage
                            language = { this.props.language }
                            theme = { this.props.theme }
                            toDarkTheme = { this.props.toDarkTheme }
                            toLightTheme = { this.props.toLightTheme }
                            toZH_CN = { this.props.toZH_CN }
                            toEN_US = { this.props.toEN_US }
                            toJA_JP = { this.props.toJA_JP }
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

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: checkThemeCookie(),
            language: checkLanguageCookie(),
            poolListUpdated: false,
            poolList: {
                event: [],
                limit: [],
                regular: [],
            }
        }
    }

    componentDidMount() {
        if(!this.state.poolListUpdated) {
            console.log("init...");
            this.getPoolList();
            console.log("up to date!");
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

    getPoolList = () => {
        const data = {
            params: {
                type: "search",
                method: "getPoolList",
                poolType: "all"
            }
        };
        axios.get("/getPoolList",data)
            .then(res => {
                res.data.update = true;
                this.setState({
                    poolList: res.data
                })
            })
    }

    render() {
        return (
            <MainRouter
                language = { this.state.language }
                theme = { this.state.theme }
                toDarkTheme = { this.toDarkTheme }
                toLightTheme = { this.toLightTheme }
                toZH_CN = { this.toZH_CN }
                toEN_US = { this.toEN_US }
                toJA_JP = { this.toJA_JP }
                poolList = { this.state.poolList }
            />
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("react-root")
)