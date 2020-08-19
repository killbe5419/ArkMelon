import React from "react";
import { MainContents } from "../components/basic.jsx";
import "../../sass/pages/pools.scss";
import Template from "../components/Template.jsx";

class RegularPool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zh_cn: {
                contents: [
                    {
                        key: 35,
                        tag: "pool",
                        name: "常驻标准寻访35期 [ 2020/08/20 ~ 2020/09/03 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/35",
                                img: "../images/pools/regularPool/regular35.jpg"
                            }
                        ],

                    },
                    {
                        key: 34,
                        tag: "pool",
                        name: "常驻标准寻访34期 [ 2020/08/06 ~ 2020/08/20 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/34",
                                img: "../images/pools/regularPool/regular34.jpg"
                            }
                        ],

                    },
                    {
                        key: 33,
                        tag: "pool",
                        name: "常驻标准寻访33期 [ 2020/07/23 ~ 2020/08/06 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/33",
                                img: "../images/pools/regularPool/regular33.jpg"
                            }
                        ],

                    },
                    {
                        key: 32,
                        tag: "pool",
                        name: "常驻标准寻访32期 [ 2020/07/09 ~ 2020/07/23 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/32",
                                img: "../images/pools/regularPool/regular32.jpg"
                            }
                        ],

                    },
                    {
                        key: 31,
                        tag: "pool",
                        name: "常驻标准寻访31期 [ 2020/06/25 ~ 2020/07/09 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/31",
                                img: "../images/pools/regularPool/regular31.jpg"
                            }
                        ],

                    },
                    {
                        key: 30,
                        tag: "pool",
                        name: "常驻标准寻访30期 [ 2020/06/11 ~ 2020/06/25 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/30",
                                img: "../images/pools/regularPool/regular30.jpg"
                            }
                        ],

                    },
                    {
                        key: 29,
                        tag: "pool",
                        name: "常驻标准寻访29期 [ 2020/05/28 ~ 2020/06/11 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/29",
                                img: "../images/pools/regularPool/regular29.jpg"
                            }
                        ],

                    },
                    {
                        key: 28,
                        tag: "pool",
                        name: "常驻标准寻访28期 [ 2020/05/14 ~ 2020/05/28 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/28",
                                img: "../images/pools/regularPool/regular28.jpg"
                            }
                        ],

                    },
                    {
                        key: 27,
                        tag: "pool",
                        name: "常驻标准寻访27期 [ 2020/04/30 ~ 2020/05/14 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/27",
                                img: "../images/pools/regularPool/regular27.jpg"
                            }
                        ],

                    },
                    {
                        key: 26,
                        tag: "pool",
                        name: "常驻标准寻访26期 [ 2020/04/16 ~ 2020/04/30 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/26",
                                img: "../images/pools/regularPool/regular26.jpg"
                            }
                        ],

                    },
                    {
                        key: 25,
                        tag: "pool",
                        name: "常驻标准寻访25期 [ 2020/04/02 ~ 2020/04/16 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/25",
                                img: "../images/pools/regularPool/regular25.jpg"
                            }
                        ],

                    },
                    {
                        key: 24,
                        tag: "pool",
                        name: "常驻标准寻访24期 [ 2020/03/19 ~ 2020/04/02 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/24",
                                img: "../images/pools/regularPool/regular24.jpg"
                            }
                        ],

                    },
                    {
                        key: 23,
                        tag: "pool",
                        name: "常驻标准寻访23期 [ 2020/03/05 ~ 2020/03/19 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/23",
                                img: "../images/pools/regularPool/regular23.jpg"
                            }
                        ],

                    },
                    {
                        key: 22,
                        tag: "pool",
                        name: "常驻标准寻访22期 [ 2020/02/20 ~ 2020/03/05 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/22",
                                img: "../images/pools/regularPool/regular22.jpg"
                            }
                        ],

                    },
                    {
                        key: 21,
                        tag: "pool",
                        name: "常驻标准寻访21期 [ 2020/02/06 ~ 2020/02/20 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/21",
                                img: "../images/pools/regularPool/regular21.jpg"
                            }
                        ],

                    },
                    {
                        key: 20,
                        tag: "pool",
                        name: "常驻标准寻访20期 [ 2020/01/23 ~ 2020/02/06 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/20",
                                img: "../images/pools/regularPool/regular20.jpg"
                            }
                        ],

                    },
                    {
                        key: 19,
                        tag: "pool",
                        name: "常驻标准寻访19期 [ 2020/01/09 ~ 2020/01/23 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/19",
                                img: "../images/pools/regularPool/regular19.jpg"
                            }
                        ],

                    },
                    {
                        key: 18,
                        tag: "pool",
                        name: "常驻标准寻访18期 [ 2019/12/26 ~ 2020/01/09 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/18",
                                img: "../images/pools/regularPool/regular18.jpg"
                            }
                        ],

                    },
                    {
                        key: 17,
                        tag: "pool",
                        name: "常驻标准寻访17期 [ 2019/12/12 ~ 2020/12/26 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/17",
                                img: "../images/pools/regularPool/regular17.jpg"
                            }
                        ],

                    },
                    {
                        key: 16,
                        tag: "pool",
                        name: "常驻标准寻访16期 [ 2019/11/28 ~ 2019/12/12 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/16",
                                img: "../images/pools/regularPool/regular16.jpg"
                            }
                        ],

                    },
                    {
                        key: 15,
                        tag: "pool",
                        name: "常驻标准寻访15期 [ 2019/11/14 ~ 2019/11/28 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/15",
                                img: "../images/pools/regularPool/regular15.jpg"
                            }
                        ],

                    },
                    {
                        key: 0,
                        tag: "pool",
                        name: "常驻标准寻访14期 [ 2019/10/31 ~ 2019/11/14 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/14",
                                img: "../images/pools/regularPool/regular14.jpg"
                            }
                        ],

                    },
                    {
                        key: 13,
                        tag: "pool",
                        name: "常驻标准寻访13期 [ 2019/10/17 ~ 2019/10/31 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/13",
                                img: "../images/pools/regularPool/regular13.jpg"
                            }
                        ],

                    },
                    {
                        key: 12,
                        tag: "pool",
                        name: "常驻标准寻访12期 [ 2019/10/03 ~ 2019/10/17 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/12",
                                img: "../images/pools/regularPool/regular12.jpg"
                            }
                        ],

                    },
                    {
                        key: 11,
                        tag: "pool",
                        name: "常驻标准寻访11期 [ 2019/09/19 ~ 2019/10/03 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/11",
                                img: "../images/pools/regularPool/regular11.jpg"
                            }
                        ],

                    },
                    {
                        key: 10,
                        tag: "pool",
                        name: "常驻标准寻访10期 [ 2019/09/05 ~ 2019/09/19 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/10",
                                img: "../images/pools/regularPool/regular10.jpg"
                            }
                        ],

                    },
                    {
                        key: 9,
                        tag: "pool",
                        name: "常驻标准寻访09期 [ 2019/08/22 ~ 2019/09/05 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/09",
                                img: "../images/pools/regularPool/regular09.jpg"
                            }
                        ],

                    },
                    {
                        key: 8,
                        tag: "pool",
                        name: "常驻标准寻访08期 [ 2019/08/08 ~ 2019/08/22 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/08",
                                img: "../images/pools/regularPool/regular08.jpg"
                            }
                        ],

                    },
                    {
                        key: 7,
                        tag: "pool",
                        name: "常驻标准寻访07期 [ 2019/07/25 ~ 2019/08/08 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/07",
                                img: "../images/pools/regularPool/regular07.jpg"
                            }
                        ],

                    },
                    {
                        key: 6,
                        tag: "pool",
                        name: "常驻标准寻访06期 [ 2019/07/11 ~ 2019/07/25 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/06",
                                img: "../images/pools/regularPool/regular06.jpg"
                            }
                        ],

                    },
                    {
                        key: 5,
                        tag: "pool",
                        name: "常驻标准寻访05期 [ 2019/06/27 ~ 2019/07/11 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/05",
                                img: "../images/pools/regularPool/regular05.jpg"
                            }
                        ],

                    },
                    {
                        key: 4,
                        tag: "pool",
                        name: "常驻标准寻访04期 [ 2019/06/13 ~ 2019/06/27 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/04",
                                img: "../images/pools/regularPool/regular04.jpg"
                            }
                        ],

                    },
                    {
                        key: 3,
                        tag: "pool",
                        name: "常驻标准寻访03期 [ 2019/05/30 ~ 2019/06/13 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/03",
                                img: "../images/pools/regularPool/regular03.jpg"
                            }
                        ],

                    },
                    {
                        key: 2,
                        tag: "pool",
                        name: "常驻标准寻访02期 [ 2019/05/16 ~ 2019/05/30 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/02",
                                img: "../images/pools/regularPool/regular02.jpg"
                            }
                        ],

                    },
                    {
                        key: 1,
                        tag: "pool",
                        name: "常驻标准寻访01期 [ 2019/04/30 ~ 2019/05/16 ]",
                        data: [
                            {
                                key: 0,
                                href: "/regularPool/01",
                                img: "../images/pools/regularPool/regular01.jpg"
                            }
                        ],
                    },
                ]
            },
            ja_jp: {},
            en_us: {}
        }
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
                    <br />
                    <br />
                    <MainContents contents={ language.contents } theme={ this.props.theme } />
                </div>
            </Template>
        );
    }
}

export default RegularPool;