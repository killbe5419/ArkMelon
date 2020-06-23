import React from "react";
import "../../styles/components/Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zh_cn: {
                contents: [
                    {
                        key: 0,
                        content: "关于ArkMelon"
                    },
                    {
                        key: 1,
                        content: "使用授权"
                    },
                    {
                        key: 2,
                        content: "手机/便携设备视图"
                    }
                ]
            },
            ja_jp: {
                contents: [
                    {
                        key: 0,
                        content: "ArkMelonについて"
                    },
                    {
                        key: 1,
                        content: "著作権関連"
                    },
                    {
                        key: 2,
                        content: "スマホ/携帯設備ページ"
                    }
                ]
            },
            en_us: {
                contents: [
                    {
                        key: 0,
                        content: "About ArkMelon"
                    },
                    {
                        key: 1,
                        content: "Authority"
                    },
                    {
                        key: 2,
                        content: "Phone/Portable View"
                    }
                ]
            }
        }
    }

    render() {
        let ctx;
        if(this.props.language === "zh-cn") {
            ctx = this.state.zh_cn;
        }
        else if(this.props.language === "ja-jp") {
            ctx = this.state.ja_jp;
        }
        else if(this.props.language === "en-us") {
            ctx = this.state.en_us;
        } else {
            ctx = this.state.zh_cn;
        }
        return (
            <div className="footer">
                <div className="footer-contents">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <a href="/"> { ctx.contents[0].content }</a>
                        </div>
                        <div className="footer-top-middle">
                            <a href="/"> { ctx.contents[1].content } </a>
                        </div>
                        <div className="footer-top-right">
                            <a href="/">{ ctx.contents[2].content }</a>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright © 2020 DragonCat Products.</p>
                        <img alt="QR" src="../../images/githubQR.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;