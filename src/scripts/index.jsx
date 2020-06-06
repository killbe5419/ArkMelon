import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import axios from "axios";

class ImgA extends React.Component {
    render() {
        const span = this.props.input.name ? (<span>{ this.props.input.name }</span>) : null;
        return (
            <a className={ this.props.className } href={ this.props.input.href } >
                <img alt={ this.props.tag + this.props.input.key } src={ this.props.input.img } />
                { span }
            </a>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
           <ImgA className="logo" tag="logo"   input={ this.props.content } />
        );
    }
}

class DropdownMenu extends React.Component {
    render() {
        const tmp = this.props.listInfo.data;
        const listItems = tmp.map(x =>
            <a key={ x.key.toString() } href={ x.href }>
                { x.title }
            </a>
        );
        if(this.props.listInfo.display) {
            return (
                <div className="dropdown">
                    { listItems }
                </div>
            );
        } else {
            return null;
        }
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
                onMouseOver={ () => this.props.onMouseOver(x.key, "top", "nav") }
                onMouseLeave={ () => this.props.onMouseLeave(x.key, "top", "nav") }
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
                    onMouseOver= {() => this.props.onMouseOver(null, "top", this.props.tag) }
                    onMouseLeave= { () => this.props.onMouseLeave(null, "top", this.props.tag) }
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
                    onMouseOver={ () => this.props.onMouseOver(0, "top", "opt") }
                    onMouseLeave={ () => this.props.onMouseLeave(0, "top", "opt") }
                />
                <Language
                    tag={ "language" }
                    content={ this.props.contents[1] }
                    onMouseOver={ () => this.props.onMouseOver(1, "top", "opt") }
                    onMouseLeave={ () => this.props.onMouseLeave(1, "top", "opt") }
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
    render() {
        return (
            <div className="header">
                <header className="top-bar">
                    <Logo content={ this.props.contents.logo }/>
                    <Nav
                        tag="nav"
                        contents={ this.props.contents.nav }
                        onMouseOver={  this.props.onMouseOver }
                        onMouseLeave={ this.props.onMouseLeave }
                    />
                    <Search
                        tag="srh"
                        contents={ this.props.contents.srh }
                        onMouseOver={ this.props.onMouseOver }
                        onMouseLeave={ this.props.onMouseLeave }
                        onClick={ this.props.onClick }
                    />
                    <Options
                        tag="opt"
                        contents={ this.props.contents.opt }
                        onMouseOver={ this.props.onMouseOver }
                        onMouseLeave={ this.props.onMouseLeave }
                    />
                </header>
            </div>
        );
    }
}

class ContentsContainer extends React.Component {
    render() {
        let listItem;
        if(this.props.content.data && Array.isArray(this.props.content.data)) {
            listItem = this.props.content.data.map ( x =>
               <ImgA input={ x } tag={ this.props.content.tag } key={ x.key }/>
            )
        } else {
            listItem = null;
        }
        if(listItem !== null) {
            return (
                <div className="new-contents-v">
                    { listItem }
                </div>
            )
        } else {
            return null;
        }
    }
}

class MainContent extends React.Component{
    render() {
        return (
            <div className="news-containers">
                <p> { this.props.content.name }</p>
                <ContentsContainer content={ this.props.content } />
            </div>
        );
    }
}

class MainContents extends React.Component {
    render() {
        let listItem;
        if(this.props.contents && Array.isArray(this.props.contents)) {
            listItem = this.props.contents.map( x =>
                <MainContent content={ x } key={ x.key }/>
            )
        } else {
            listItem = null;
        }
        if(listItem !== null) {
            return (
                <div className="main-contents">
                    { listItem }
                </div>
            )
        } else {
            return null;
        }
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="main-top">
                <div className= { this.props.content.tag }>
                    <p className={ this.props.content.tag + "-name"}> { this.props.content.name } </p>
                    <p className={ this.props.content.tag + "-description"}> { this.props.content.description } </p>
                </div>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-container">
                    <Title content={ this.props.contents.title } />
                    <MainContents contents={ this.props.contents.contents }/>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-contents">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <p>example text 1</p>
                        </div>
                        <div className="footer-top-middle">
                            <p>example text 2</p>
                        </div>
                        <div className="footer-top-right">
                            <p>example text 3</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-middle">

                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2020 DragonCat Products.</p>
                        <img alt="QR" src="../images/githubQR.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: {
                top: {
                    logo: {
                        key: 0,
                        tag: "logo",
                        href: "/",
                        img: "../images/logo.jpg",
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
                },
                main: {
                    title:{
                        tag: "title",
                        name: "ArkMelon",
                        description: "用于快速查看明日方舟游戏数据的资料库",
                    },
                    contents: [
                        {
                            key: 0,
                            tag: "event",
                            name: "最新活动",
                            data: [
                                {
                                    key: 0,
                                    href: "/",
                                    img: "../images/index/event1.png"
                                },
                                {
                                    key: 1,
                                    href: "/",
                                    img: "../images/index/event2.png"
                                },
                            ],
                        },
                        {
                            key: 1,
                            tag: "pool",
                            name: "新增卡池",
                            data:[
                                {
                                    key: 0,
                                    href: "/",
                                    img: "../images/index/pool1.png"
                                },
                                {
                                    key: 1,
                                    href: "/",
                                    img: "../images/index/pool2.png"
                                },
                            ],
                        },
                        {
                            key: 2,
                            tag: "operator",
                            name: "新增干员",
                            data: [
                                {
                                    key: 0,
                                    href: "/",
                                    img: "../images/index/operator1.png"
                                },
                            ],
                        },
                        {
                            key: 3,
                            tag: "cloth",
                            name: "新增服装",
                            data: [
                                {
                                    key: 0,
                                    href: "/",
                                    img: "../images/index/cloth1.png"
                                },
                            ],
                        },
                        {
                            key: 4,
                            tag: "theme",
                            name: "新增家具",
                            data: [
                                {
                                    key: 0,
                                    href: "/",
                                    img: "../images/index/theme1.png"
                                },
                            ],
                        },
                        {
                            key: 5,
                            tag: "stage",
                            name: "新增关卡",
                            data:[
                                {
                                    key: 0,
                                    href: "/",
                                    img: "../images/index/stage1.png"
                                },
                                {
                                    key: 1,
                                    href: "/",
                                    img: "../images/index/stage2.png"
                                },
                            ],
                        },
                    ],
                }
            }
        };
    }

    handleHover = (x, position, type) => {
        let all = this.state.contents;
        if(position === "top") {
            let tmp = all.top;
            if(type === "nav") {
                tmp.nav[x].listInfo.display = true;
                if(tmp.nav[x].hasOwnProperty("color")) {
                    tmp.nav[x].color = "#f08080";
                }
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
            if(type === "opt") {
                tmp.opt[x].listInfo.display = true;
                if(tmp.opt[x].hasOwnProperty("color")) {
                    tmp.opt[x].color = "#f08080";
                }
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
            if(type === "srh") {
                if(tmp.srh.button.hasOwnProperty("color")) {
                    tmp.srh.button.color = "#f08080";
                }
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
        }
    }

    handleLeave = (x, position, type) => {
        let all = this.state.contents;
        if(position === "top") {
            let tmp = all.top;
            if(type === "nav") {
                tmp.nav[x].listInfo.display = false;
                if(tmp.nav[x].hasOwnProperty("color")) {
                    tmp.nav[x].color = "#ffffff";
                }
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
            if(type === "opt") {
                tmp.opt[x].listInfo.display = false;
                if(tmp.opt[x].hasOwnProperty("color")) {
                    tmp.opt[x].color = "#ffffff";
                }
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
            if(type === "srh") {
                if(tmp.srh.button.hasOwnProperty("color")) {
                    tmp.srh.button.color = "#fff";
                }
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
        }

    }

    showSearchBar = () => {
        let all = this.state.contents;
        let tmp = all.top;
        if(tmp.hasOwnProperty("srh")) {
            if(tmp.srh.hasOwnProperty("input") && tmp.srh.hasOwnProperty("button")) {
                tmp.srh.input.display = !tmp.srh.input.display;
                all.top = tmp;
                this.setState({
                    contents: all
                })
            }
        }
    }

    render() {
        return (
            <div>
               <TopBar
                   contents={ this.state.contents.top }
                   onMouseOver={ this.handleHover }
                   onMouseLeave={ this.handleLeave }
                   onClick={ this.showSearchBar }
               />
               <Main contents={ this.state.contents.main }/>
               <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-root")
)