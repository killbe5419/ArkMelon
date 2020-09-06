import React from "react";
import { MainContents } from "../components/basic.jsx";
import "../../sass/pages/pools.scss";
import Template from "../components/Template.jsx";

class ShowPool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zh_cn: {},
            ja_jp: {},
            en_us: {},
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.poolList !== prevProps.poolList) {
            this.handlePoolList();
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

    handlePoolList = () => {
        const poolList = this.props.poolList[this.props.poolType.split("Pool")[0]].reverse();
        let arr = [];
        poolList.forEach( x => {
            arr.push({
                key: x.type + x.code,
                tag: "pool",
                name: `${x.name} [ ${x.date} ] `,
                data: [
                    {
                        key: 0,
                        href: x.url,
                        img: `../images/pools/${ this.props.poolType }/${ x.name }.jpg`
                    }
                ],
            })
        })
        this.setState({
            zh_cn:{
                contents: arr
            }
        })
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

export default ShowPool;