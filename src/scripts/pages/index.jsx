import React from "react";
import { Title, MainContents } from "../components/basic.jsx";
import "../../sass/index.scss";
import Template from "../components/Template.jsx";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light-theme",
            zh_cn: {
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
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/event1.jpg"
                                    },
                                    {
                                        key: 1,
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/event2.jpg"
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
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/pool1.jpg"
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
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/operator1.jpg"
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
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/cloth1.jpg"
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
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/theme1.jpg"
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
                                        href: "/zh-cn",
                                        img: "../images/index/zh-cn/stage1.jpg"
                                    },
                                ],
                            },
                        ],
                    }
                }
            },
            ja_jp: {
                contents: {
                    main: {
                        title:{
                            tag: "title",
                            name: "ArkMelon",
                            description: "アークナイツの情報を便利に調べるためのデータベース",
                        },
                        contents: [
                            {
                                key: 0,
                                tag: "event",
                                name: "最新イベント",
                                data: [
                                    {
                                        key: 0,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/event1.jpg"
                                    },
                                    {
                                        key: 1,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/event2.jpg"
                                    },
                                    {
                                        key: 2,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/event3.jpg"
                                    },
                                ],
                            },
                            {
                                key: 1,
                                tag: "pool",
                                name: "最新スカウト",
                                data:[
                                    {
                                        key: 0,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/pool1.png"
                                    },
                                ],
                            },
                            {
                                key: 2,
                                tag: "operator",
                                name: "最新オペレーター",
                                data: [
                                    {
                                        key: 0,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/operator1.png"
                                    },
                                ],
                            },
                            {
                                key: 3,
                                tag: "cloth",
                                name: "最新服装",
                                data: [
                                    {
                                        key: 0,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/cloth1.jpg"
                                    },
                                    {
                                        key: 1,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/cloth2.jpg"
                                    },
                                ],
                            },
                            {
                                key: 4,
                                tag: "theme",
                                name: "最新家具",
                                data: [
                                    {
                                        key: 0,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/theme1.jpg"
                                    },
                                ],
                            },
                            {
                                key: 5,
                                tag: "stage",
                                name: "最新ステージ",
                                data:[
                                    {
                                        key: 0,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/stage1.jpg"
                                    },
                                    {
                                        key: 1,
                                        href: "/ja-jp",
                                        img: "../images/index/ja-jp/stage2.jpg"
                                    },
                                ],
                            },
                        ],
                    }
                }
            },
            en_us: {
                contents: {
                    main: {
                        title:{
                            tag: "title",
                            name: "ArkMelon",
                            description: "A Database To Search Data Of Arknights Efficiently",
                        },
                        contents: [
                            {
                                key: 0,
                                tag: "event",
                                name: "Newest Events",
                                data: [
                                    {
                                        key: 0,
                                        href: "/en-us",
                                        img: "../images/index/en-us/nothing.jpg"
                                    },
                                ],
                            },
                            {
                                key: 1,
                                tag: "pool",
                                name: "Newest Scouts",
                                data:[
                                    {
                                        key: 0,
                                        href: "/en-us",
                                        img: "../images/index/en-us/nothing.jpg"
                                    },
                                ],
                            },
                            {
                                key: 2,
                                tag: "operator",
                                name: "Newest Operators",
                                data: [
                                    {
                                        key: 0,
                                        href: "/en-us",
                                        img: "../images/index/en-us/nothing.jpg"
                                    },
                                ],
                            },
                            {
                                key: 3,
                                tag: "cloth",
                                name: "Newest Clothes",
                                data: [
                                    {
                                        key: 0,
                                        href: "/en-us",
                                        img: "../images/index/en-us/nothing.jpg"
                                    },
                                ],
                            },
                            {
                                key: 4,
                                tag: "theme",
                                name: "Newest Themes",
                                data: [
                                    {
                                        key: 0,
                                        href: "/en-us",
                                        img: "../images/index/en-us/nothing.jpg"
                                    },
                                ],
                            },
                            {
                                key: 5,
                                tag: "stage",
                                name: "Newest Stages",
                                data:[
                                    {
                                        key: 0,
                                        href: "/en-us",
                                        img: "../images/index/en-us/nothing.jpg"
                                    },
                                ],
                            },
                        ],
                    }
                }
            }

        };
    }

    toDarkTheme = () => {
        console.log("to-dark");
        this.setState({
            theme: "dark-theme"
        })
    }

    toLightTheme = () => {
        console.log("to-light");
        this.setState({
            theme: "light-theme"
        })
    }

    render() {
        let language;
        if(this.props.language === "zh-cn") {
            language = this.state.zh_cn.contents.main;
        }
        else if(this.props.language === "ja-jp") {
            language = this.state.ja_jp.contents.main;
        }
        else if(this.props.language === "en-us") {
            language = this.state.en_us.contents.main;
        } else {
            language = this.state.zh_cn.contents.main;
        }
        return (
            <Template
                language={ this.props.language }
                theme={ this.state.theme }
                toDarkTheme={ this.toDarkTheme }
                toLightTheme={ this.toLightTheme }
            >
                <div className={`main-container ${this.state.theme}`} >
                    <Title className="main-top" content={ language.title } theme={ this.state.theme } />
                    <MainContents contents={ language.contents } theme={ this.state.theme } />
                    { this.props.children }
                </div>
            </Template>
        );
    }
}

export default Index;