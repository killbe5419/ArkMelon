import React from "react";
import "../../styles/components/Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-contents">
                    <div className="footer-top">
                        <div className="footer-top-left">
                            <a href="/">关于ArkMelon</a>
                        </div>
                        <div className="footer-top-middle">
                            <a href="/">使用授权</a>
                        </div>
                        <div className="footer-top-right">
                            <a href="/">手机/便携设备视图</a>
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