import React from "react";
import { Title, MainContents } from "../components/basic.jsx";
import "../../sass/pages/index.scss";
import Template from "../components/Template.jsx";



class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zh_cn: {
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
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/event0.jpg"
                            },
                            {
                                key: 1,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/event1.jpg"
                            },
                            {
                                key: 2,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/event2.jpg"
                            },
                            {
                                key: 3,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/event3.jpg"
                            },
                            {
                                key: 4,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/event4.jpg"
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
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/pool0.jpg"
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
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/operator0.png"
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
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/cloth0.jpg"
                            },
                            {
                                key: 1,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/cloth1.jpg"
                            },
                            {
                                key: 2,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/cloth2.jpg"
                            },
                            {
                                key: 3,
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/cloth3.jpg"
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
                                href: "https://ak.hypergryph.com/news/2020087452.html",
                                img: "../images/index/zh-cn/theme0.jpg"
                            },
                        ],
                    },
                ],
            },
            ja_jp: {
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
                                href: "/",
                                img: "../images/index/ja-jp/event1.jpg"
                            },
                            {
                                key: 1,
                                href: "/",
                                img: "../images/index/ja-jp/event2.jpg"
                            },
                            {
                                key: 2,
                                href: "/",
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
                                href: "/",
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
                                href: "/",
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
                                href: "/",
                                img: "../images/index/ja-jp/cloth1.jpg"
                            },
                            {
                                key: 1,
                                href: "/",
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
                                href: "/",
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
                                href: "/",
                                img: "../images/index/ja-jp/stage1.jpg"
                            },
                            {
                                key: 1,
                                href: "/",
                                img: "../images/index/ja-jp/stage2.jpg"
                            },
                        ],
                    },
                ],

            },
            en_us: {
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
                                href: "/",
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
                                href: "/",
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
                                href: "/",
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
                                href: "/",
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
                                href: "/",
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
                                href: "/",
                                img: "../images/index/en-us/nothing.jpg"
                            },
                        ],
                    },
                ],
            }

        };
    }

    checkLanguage = () => {
        if(this.props.language === "zh-cn") {
            return this.state.zh_cn;
        }
        else if(this.props.language === "ja-jp") {
            return this.state.ja_jp;
        }
        else if(this.props.language === "en-us") {
            return this.state.en_us;
        } else {
            return this.state.zh_cn;
        }
    }

    render() {
        let language = this.checkLanguage();

        return (
            <Template
                language={ this.props.language }
                theme={ this.props.theme }
                toDarkTheme={ this.props.toDarkTheme }
                toLightTheme={ this.props.toLightTheme }
                toZH_CN = { this.props.toZH_CN }
                toEN_US = { this.props.toEN_US }
                toJA_JP = { this.props.toJA_JP }
            >
                <div className={`main-container ${this.props.theme}`} >
                    <Title className="main-top" content={ language.title } theme={ this.props.theme } />
                    <MainContents contents={ language.contents } theme={ this.props.theme } />
                </div>
            </Template>
        );
    }
}

export default Index;