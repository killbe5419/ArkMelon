import React from "react";
import axios from "axios";
import {ImgA, DropdownMenu} from "./basic.jsx";
import "../../styles/components/TopBar.css";

class Logo extends React.Component {
    render() {
        return (
            <ImgA className="logo" tag="logo"   input={ this.props.content } />
        );
    }
}

class TopBarContainer extends React.Component {
    render() {
        return (
            <div className={ this.props.tag + "-container"}
                 onMouseOver={ this.props.onMouseOver }
                 onMouseLeave={ this.props.onMouseLeave }
            >
                <div className={ this.props.tag + "-contents"}>
                    { this.props.content.name }
                </div>
                <DropdownMenu listInfo={ this.props.content.listInfo } />
            </div>
        );
    }
}

class Nav extends React.Component {
    render() {
        const tmp = this.props.contents.slice();
        const listItem = tmp.map( x =>
            <TopBarContainer
                tag={ this.props.tag }
                key={ x.key }
                content={ x }
                onMouseOver={ () => this.props.onMouseOver(x.key, "nav") }
                onMouseLeave={ () => this.props.onMouseLeave(x.key, "nav") }
            />
        )
        return (
            <nav className="nav">
                { listItem }
            </nav>
        );
    }
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: " "
        };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = event => {
        const data = {
            params:{
                method: "search",
                value: this.state.value
            }
        }
        axios.get("/search",data)
            .then(res => {
                window.open(res.data, "_blank");
            })
        event.preventDefault();
    }

    handleClean = () => {
        this.setState({
            value: ""
        })
    }

    render() {
        let input;
        if(this.props.contents.input.display) {
            input = (
                <form className="search-input" onSubmit={ this.handleSubmit }>
                    <input
                        placeholder="  搜索"
                        value={ this.state.value }
                        onChange={ this.handleChange }
                    />
                    <button type="reset"
                            className="search-cleaner"
                            onClick={ this.handleClean }
                    > x   </button>
                    <button className="search-submit" type="submit">go</button>
                </form>
            );
        } else {
            input = null;
        }
        return (
            <div className="search">
                { input }
                <button
                    className="search-icon"
                    onMouseOver= {() => this.props.onMouseOver(null, this.props.tag) }
                    onMouseLeave= { () => this.props.onMouseLeave(null, this.props.tag) }
                    onClick={ () => this.props.onClick() }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" >
                        <path d="
                            M 21 3
                            C 11 3 4 10 4 20
                            C 4 30 11.5 37 21 37
                            C 25 37 27.5 35 30 35
                            L 42.5 46.5
                            L 46.5 42.5
                            L 34.5 30
                            C 36 27 38 24 38 20
                            C 38 10.5 30 3 21 3 Z
                            M 21 7
                            C 28 7 34 13 34 20
                            C 34 27 28 33 21 33
                            C 14 33 8 27 8 20
                            C 8 12.5 13.5 7 21 7 Z
                            M 21 7 "
                              fill={ this.props.contents.button.color }
                        />
                    </svg>
                </button>
            </div>
        );
    }
}

class ChangeTheme extends React.Component {
    render() {
        return (
            <div className={ this.props.tag + "-container"}
                 onMouseOver={ this.props.onMouseOver }
                 onMouseLeave={ this.props.onMouseLeave }
            >
                <div className={ this.props.tag + "-contents"}>
                    { this.props.content.name }
                </div>
                <DropdownMenu listInfo={ this.props.content.listInfo } />
            </div>
        );
    }
}

class Language extends React.Component {
    render() {
        return (
            <div
                className={ this.props.tag + "-container" }
                onMouseOver= { this.props.onMouseOver }
                onMouseLeave= { this.props.onMouseLeave }
            >
                <div className={ this.props.tag + "-contents" }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="language-icon" >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="
                            M12.87
                            15.07l-2.54-2.51.03-.03c1.74-1.94
                            2.98-4.17
                            3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5
                            7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69
                            8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4
                            19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21
                            22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"
                              fill={ this.props.content.color }
                        />
                    </svg>
                </div>
                <DropdownMenu listInfo={ this.props.content.listInfo } />
            </div>
        );
    }
}

class Github extends React.Component {
    render() {
        return (
            <div className={ this.props.tag + "-container" }>
                <a className={ this.props.tag + "-contents" } href={ this.props.content.href } target="_blank" > { this.props.content.name } </a>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div className="options" >
                <ChangeTheme
                    tag={ this.props.tag }
                    content={ this.props.contents[0] }
                    onMouseOver={ () => this.props.onMouseOver(0, "opt") }
                    onMouseLeave={ () => this.props.onMouseLeave(0, "opt") }
                />
                <Language
                    tag={ "language" }
                    content={ this.props.contents[1] }
                    onMouseOver={ () => this.props.onMouseOver(1, "opt") }
                    onMouseLeave={ () => this.props.onMouseLeave(1, "opt") }
                />
                <Github
                    tag={ this.props.tag }
                    content={ this.props.contents[2] }
                />
            </div>
        );
    }
}

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logo: {
                key: 0,
                tag: "logo",
                href: "/",
                img: "../../images/logo.jpg",
                name: "ArkMelon"
            },
            nav:[
                {
                    key: 0,
                    name: "游戏数据",
                    listInfo: {
                        display: false,
                        data: [
                            {
                                key: 0,
                                title: "干员",
                                href: "/operators"
                            },
                            {
                                key: 1,
                                title: "敌人",
                                href: "/enemies"
                            },
                            {
                                key: 2,
                                title: "服装",
                                href: "/clothes"
                            },
                            {
                                key: 3,
                                title: "地图",
                                href: "/maps"
                            },
                            {
                                key: 4,
                                title: "家具",
                                href: "/themes"
                            },
                            {
                                key: 5,
                                title: "活动",
                                href: "/events"
                            },
                            {
                                key: 6,
                                title: "卡池",
                                href: "/pools"
                            },
                            {
                                key: 7,
                                title: "道具",
                                href: "/items"
                            },
                        ]
                    }
                },
                {
                    key: 1,
                    name:
                        "材料相关",
                    listInfo:
                        {
                            display: false,
                            data:
                                [
                                    {
                                        key: 0,
                                        title: "干员升级",
                                        href: "/"
                                    },
                                    {
                                        key: 1,
                                        title: "刷图规划",
                                        href: "/"
                                    },
                                    {
                                        key: 2,
                                        title: "合成计算",
                                        href: "/"
                                    },
                                ]
                        }
                },
                {
                    key: 2,
                    name:
                        "寻访模拟",
                    listInfo:
                        {
                            display: false,
                            data:
                                [
                                    {
                                        key: 0,
                                        title: "#####",
                                        href: "/"
                                    },
                                    {
                                        key: 1,
                                        title: "#####",
                                        href: "/"
                                    },
                                    {
                                        key: 2,
                                        title: "#####",
                                        href: "/"
                                    },
                                ]
                        }
                }
            ],
            srh: {
                input: {
                    display: false
                },
                button:{
                    color: "#fff",
                },
            },
            opt:[
                {
                    key: 0,
                    name: "主题",
                    listInfo: {
                        display: false,
                        data: [
                            {
                                key: 0,
                                title: "#####",
                                href: "/"
                            },
                            {
                                key: 1,
                                title: "#####",
                                href: "/"
                            },
                        ]
                    }
                },
                {
                    key: 1,
                    name: "多语言",
                    color: "#ffffff",
                    listInfo:
                        {
                            display: false,
                            data:
                                [
                                    {
                                        key: 0,
                                        title: "中文",
                                        href: "/"
                                    },
                                    {
                                        key: 1,
                                        title: "English",
                                        href: "/"
                                    },
                                    {
                                        key: 2,
                                        title: "日本語",
                                        href: "/"
                                    },
                                ]
                        }
                },
                {
                    key: 2,
                    name: "Github",
                    href: "https://github.com/killbe5419/ArkMelon",
                    listInfo: {}
                }
            ],
        }
    }

    handleHover = (x, type) => {
        let tmp = this.state;
        if(type === "nav") {
            tmp.nav[x].listInfo.display = true;
            if(tmp.nav[x].hasOwnProperty("color")) {
                tmp.nav[x].color = "#f08080";
            }
            this.setState({
                tmp
            })
        }
        if(type === "opt") {
            tmp.opt[x].listInfo.display = true;
            if(tmp.opt[x].hasOwnProperty("color")) {
                tmp.opt[x].color = "#f08080";
            }
            this.setState({
                tmp
            })
        }
        if(type === "srh") {
            if(tmp.srh.button.hasOwnProperty("color")) {
                tmp.srh.button.color = "#f08080";
            }
            this.setState({
                tmp
            })
        }
    }

    handleLeave = (x, type) => {
        let tmp = this.state;
            if(type === "nav") {
                tmp.nav[x].listInfo.display = false;
                if(tmp.nav[x].hasOwnProperty("color")) {
                    tmp.nav[x].color = "#ffffff";
                }
                this.setState({
                    tmp
                })
            }
            if(type === "opt") {
                tmp.opt[x].listInfo.display = false;
                if(tmp.opt[x].hasOwnProperty("color")) {
                    tmp.opt[x].color = "#ffffff";
                }
                this.setState({
                    tmp
                })
            }
            if(type === "srh") {
                if(tmp.srh.button.hasOwnProperty("color")) {
                    tmp.srh.button.color = "#fff";
                }
                this.setState({
                    tmp
                })
            }

    }

    showSearchBar = () => {
        let tmp = this.state;
        if(tmp.hasOwnProperty("srh")) {
            if(tmp.srh.hasOwnProperty("input") && tmp.srh.hasOwnProperty("button")) {
                tmp.srh.input.display = !tmp.srh.input.display;
                this.setState({
                    tmp
                })
            }
        }
    }

    render() {
        return (
            <div className="header">
                <header className="top-bar">
                    <Logo content={ this.state.logo }/>
                    <Nav
                        tag="nav"
                        contents={ this.state.nav }
                        onMouseOver={  this.handleHover }
                        onMouseLeave={ this.handleLeave }
                    />
                    <Search
                        tag="srh"
                        contents={ this.state.srh }
                        onMouseOver={ this.handleHover }
                        onMouseLeave={ this.handleLeave }
                        onClick={ this.showSearchBar }
                    />
                    <Options
                        tag="opt"
                        contents={ this.state.opt }
                        onMouseOver={ this.handleHover }
                        onMouseLeave={ this.handleLeave }
                    />
                </header>
            </div>
        );
    }
}

export default TopBar;

