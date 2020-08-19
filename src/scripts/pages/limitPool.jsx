import React from "react";
import { MainContents } from "../components/basic.jsx";
import "../../sass/pages/pools.scss";
import Template from "../components/Template.jsx";

class LimitPool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zh_cn: {
                contents :[ 
                    {
                        key: 2,
                        tag: "pool",
                        name: "遗愿焰火 [ 2020/05/01 ~ 2020/05/15 ] ",
                        data: [ 
                            {
                                key: 0,
                                href: "/limitPool/last_wish_cremation",
                                img: "../images/pools/limitPool/[2020周年]遗愿焰火.jpg"
                            }
                         ],
                    },
                    {
                        key: 1,
                        tag: "pool",
                        name: "地生五金 [ 2020/01/16 ~ 2020/01/30 ] ",
                        data: [ 
                            {
                                key: 0,
                                href: "/limitPool/earthborn_metals",
                                img: "../images/pools/limitPool/[2019春节]地生五金.jpg"
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

export default LimitPool;