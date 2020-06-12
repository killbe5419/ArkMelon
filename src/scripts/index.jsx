import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./components/TopBar.jsx";
import MainTemplate from "./components/MainTemplate.jsx";
import Footer from "./components/Footer.jsx";
import { Title, MainContents } from "./components/basic.jsx";
import "../styles/index.css";

class Main extends React.Component {
    render() {
        return (
            <MainTemplate>
                <Title className="main-top" content={ this.props.contents.title } />
                <MainContents contents={ this.props.contents.contents }/>
            </MainTemplate>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: {
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

    render() {
        return (
            <div>
               <TopBar />
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