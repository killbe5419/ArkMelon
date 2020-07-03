import React from "react";
import { Title, MainContents } from "./components/basic.jsx";
import "../sass/index.scss";
import Template from "./template.jsx";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                                name: "最新スカウト",
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
                                name: "最新オペレーター",
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
                                name: "最新服装",
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
                                name: "最新家具",
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
                                name: "最新ステージ",
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
                                name: "Newest Scouts",
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
                                name: "Newest Operators",
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
                                name: "Newest Clothes",
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
                                name: "Newest Themes",
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
                                name: "Newest Stages",
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
            }

        };
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
            <Template language={ this.props.language }>
                <div className="main-container">
                    <Title className="main-top" content={ language.title } />
                    <MainContents contents={ language.contents }/>
                    { this.props.children }
                </div>
            </Template>
        );
    }
}

export default Index;