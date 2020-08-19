import React from "react";
import { MainContents } from "../components/basic.jsx";
import "../../sass/pages/pools.scss";
import Template from "../components/Template.jsx";

class EventPool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zh_cn: {
                contents: [
                    {
                        key: 21,
                        tag: "pool",
                        name: "不羁逆流 [ 2020/08/11 ~ 2020/08/25 ] ",
                        data: [ 
                            {
                                key: 0,
                                href: "/eventPool/unbound_reflux",
                                img: "../images/pools/eventPool/21不羁逆流.jpg"
                            }
                        ],
                    },
                    {
                        key: 20,
                        tag: "pool",
                        name: "流沙涡旋 [2020/07/28 ~ 2020/08/11] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/spiral_sinking",
                                img: "../images/pools/eventPool/20流沙涡旋.jpg"
                            }
                       ],
                    },
                    {
                        key: 19,
                        tag: "pool",
                        name: "君影轻灵 [2020/07/09 ~ 2020/07/23] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/lisa_of_the_valley",
                                img: "../images/pools/eventPool/19君影轻灵.jpg"
                            }
                       ],
                    },
                    {
                        key: 18,
                        tag: "pool",
                        name: "雪落晨心 [2020/06/18 ~ 2020/07/02] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/snowfall_утро",
                                img: "../images/pools/eventPool/18雪落晨心.jpg"
                            }
                       ],
                    },
                    {
                        key: 17,
                        tag: "pool",
                        name: "雾漫荒林 [2020/06/02 ~ 2020/06/16] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/misty_wild",
                                img: "../images/pools/eventPool/17雾漫荒林.jpg"
                            }
                       ],
                    },
                    {
                        key: 16,
                        tag: "pool",
                        name: "联合行动 [2020/05/15 ~ 2020/05/29] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/united_operation_2",
                                img: "../images/pools/eventPool/16联合行动2.jpg"
                            }
                       ],
                    },
                    {
                        key: 15,
                        tag: "pool",
                        name: "往日幻像 [2020/04/21 ~ 2020/05/05] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/past_illusion",
                                img: "../images/pools/eventPool/15往日幻象.jpg"
                            }
                       ],
                    },
                    {
                        key: 14,
                        tag: "pool",
                        name: "草垛上的风笛声 [2020/03/17 ~ 2020/03/31] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/grassy_bagpipe",
                                img: "../images/pools/eventPool/14草垛上的风笛声.jpg"
                            }
                       ],
                    },
                    {
                        key: 13,
                        tag: "pool",
                        name: "百种兵器 [2020/02/25 ~ 2020/03/10] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/thousands_heads",
                                img: "../images/pools/eventPool/13百种兵器.jpg"
                            }
                       ],
                    },
                    {
                        key: 12,
                        tag: "pool",
                        name: "热情，膨胀，爆发！ [2019/12/24 ~ 2020/01/07] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/enthusiasm_expansion_explosion",
                                img: "../images/pools/eventPool/12热情，膨胀，爆发！.jpg"
                            }
                       ],
                    },
                    {
                        key: 11,
                        tag: "pool",
                        name: "凝电之钻 [2019/12/10 ~ 2019/12/24] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/drill_electric",
                                img: "../images/pools/eventPool/11凝电之钻.jpg"
                            }
                       ],
                    },
                    {
                        key: 10,
                        tag: "pool",
                        name: "锁与匙的守卫者 [ 2019/11/19 ~ 2019/12/03 ] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/keeper_of_the_lock&keys",
                                img: "../images/pools/eventPool/10锁与匙的守卫者.jpg"
                            }
                       ],
                    },
                    {
                        key: 9,
                        tag: "pool",
                        name: "联合行动 [2019/11/01 ~ 2019/11/15] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/united_operation_1",
                                img: "../images/pools/eventPool/09联合行动1.jpg"
                            }
                       ],
                    },
                    {
                        key: 8,
                        tag: "pool",
                        name: "冰封原野 [2019/10/15 ~ 2019/10/29] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/frozen_land",
                                img: "../images/pools/eventPool/08冰封原野.jpg"
                            }
                       ],
                    },
                    {
                        key: 7,
                        tag: "pool",
                        name: "火舞之人 [2019/10/01 ~ 2019/10/11] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/dancing_lava",
                                img: "../images/pools/eventPool/07火舞之人.jpg"
                            }
                       ],
                    },
                    {
                        key: 6,
                        tag: "pool",
                        name: "久铸尘铁 [2019/09/10 ~ 2019/09/24] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/forging_steel",
                                img: "../images/pools/eventPool/06久铸尘铁.jpg"
                            }
                       ],
                    },
                    {
                        key: 5,
                        tag: "pool",
                        name: "深夏的守夜人 [2019/08/27 ~ 2019/09/10] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/summer_guardians",
                                img: "../images/pools/eventPool/05深夏的守夜人.jpg"
                            }
                       ],
                    },
                    {
                        key: 4,
                        tag: "pool",
                        name: "龙门特别行动专员寻访 [2019/07/22 ~ 2019/08/05] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/lungmen_specoperators",
                                img: "../images/pools/eventPool/04龙门特别行动专员寻访.jpg"
                            }
                       ],
                    },
                    {
                        key: 3,
                        tag: "pool",
                        name: "鞘中赤红 [2019/07/29 ~ 2019/07/22] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/the_crimson_hidden_dragon",
                                img: "../images/pools/eventPool/03鞘中赤红.jpg"
                            }
                       ],
                    },
                    {
                        key: 2,
                        tag: "pool",
                        name: "搅动潮汐之剑 [2019/05/30 ~ 2019/06/13] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/treasure_knights",
                                img: "../images/pools/eventPool/02搅动潮汐之剑.jpg"
                            }
                       ],
                    },
                    {
                        key: 1,
                        tag: "pool",
                        name: "银灰色的荣耀 [2019/05/23 ~ 2019/05/30] ",
                        data: [
                            {
                                key: 0,
                                href: "/eventPool/the_glory_of_sliverash",
                                img: "../images/pools/eventPool/01银灰色的荣耀.jpg"
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

                    <MainContents contents={ language.contents } theme={ this.props.theme } />
                </div>
            </Template>
        );
    }
}

export default EventPool;