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



class SimulationRouter extends React.Component {
    render() {
        return (
            <Route path={ this.props.poolUrl } >
                <Pickcard
                    language = { this.props.language }
                    theme = { this.props.theme }
                    toDarkTheme = { this.props.toDarkTheme }
                    toLightTheme = { this.props.toLightTheme }
                    toZH_CN = { this.props.toZH_CN }
                    toEN_US = { this.props.toEN_US }
                    toJA_JP = { this.props.toJA_JP }
                    poolType = { this.props.poolType }
                    poolName = { this.props.poolName }
                />
            </Route>
        );
    }
}

class SimulationRouterContainer extends React.Component {
    render() {
        const list = this.props.data.map( x =>
            <SimulationRouter
                key={ x.type + x.code }
                language = { this.props.language }
                theme = { this.props.theme }
                toDarkTheme = { this.props.toDarkTheme }
                toLightTheme = { this.props.toLightTheme }
                toZH_CN = { this.props.toZH_CN }
                toEN_US = { this.props.toEN_US }
                toJA_JP = { this.props.toJA_JP }
                poolType = { x.poolType }
                poolName = { x.poolName }
                poolUrl = { x.url }
            />
        )
        return (
            { list }
        );
    }
}

class PickRouter extends React.Component {
    render() {
        return (
            <div>
                <SimulationRouterContainer
                    language = { this.props.language }
                    theme = { this.props.theme }
                    toDarkTheme = { this.props.toDarkTheme }
                    toLightTheme = { this.props.toLightTheme }
                    toZH_CN = { this.props.toZH_CN }
                    toEN_US = { this.props.toEN_US }
                    toJA_JP = { this.props.toJA_JP }
                    data={ this.props.data.event }
                />
                <SimulationRouterContainer
                    language = { this.props.language }
                    theme = { this.props.theme }
                    toDarkTheme = { this.props.toDarkTheme }
                    toLightTheme = { this.props.toLightTheme }
                    toZH_CN = { this.props.toZH_CN }
                    toEN_US = { this.props.toEN_US }
                    toJA_JP = { this.props.toJA_JP }
                    data={ this.props.data.limit }
                />
            </div>
        );
    }
}



class MainRouter extends React.Component {
    makeRouter = (array) => {
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
                />
            </Route>
        )
    }


    render() {
        let poolArray = this.props.pickSimu.event.concat(this.props.pickSimu.limit);
        const list = this.makeRouter(poolArray);
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
                    <Route exact path="/regularPool">
                        <ShowPool
                            language = { this.props.language }
                            theme = { this.props.theme }
                            toDarkTheme = { this.props.toDarkTheme }
                            toLightTheme = { this.props.toLightTheme }
                            toZH_CN = { this.props.toZH_CN }
                            toEN_US = { this.props.toEN_US }
                            toJA_JP = { this.props.toJA_JP }
                            poolType="regularPool"
                        />
                    </Route>
                    <Route exact path="/eventPool">
                        <ShowPool
                            language = { this.props.language }
                            theme = { this.props.theme }
                            toDarkTheme = { this.props.toDarkTheme }
                            toLightTheme = { this.props.toLightTheme }
                            toZH_CN = { this.props.toZH_CN }
                            toEN_US = { this.props.toEN_US }
                            toJA_JP = { this.props.toJA_JP }
                            poolType="eventPool"
                        />
                    </Route>
                    <Route exact path="/limitPool">
                        <ShowPool
                            language = { this.props.language }
                            theme = { this.props.theme }
                            toDarkTheme = { this.props.toDarkTheme }
                            toLightTheme = { this.props.toLightTheme }
                            toZH_CN = { this.props.toZH_CN }
                            toEN_US = { this.props.toEN_US }
                            toJA_JP = { this.props.toJA_JP }
                            poolType="limitPool"
                        />
                    </Route>
                    { list }
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
            pickSimu: {
                event: [],
                limit: [],
                regular: [],
                update: false,
            }
        }
    }

    componentDidMount() {
        if(!this.state.pickSimu.update) {
            console.log("init");
            this.getSimulationRouter();
        } else {
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

    getSimulationRouter = () => {
        const data = {
            params: {
                type: "search",
                method: "getPoolList",
                poolType: "all"
            }
        };
        axios.get("/getPoolList",data)
            .then(res => {
                //console.log(this.state.pickSimu);
                res.data.update = true;
                this.setState({
                    pickSimu: res.data
                })
                //console.log(this.state.pickSimu);
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
                pickSimu = { this.state.pickSimu }
            />
        );
    }

}

ReactDOM.render(
    <App />,
    document.getElementById("react-root")
)