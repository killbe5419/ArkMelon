import React from "react";
import TopBar from "./TopBar.jsx";
import MainTemplate from "./MainTemplate.jsx";
import Footer from "./Footer.jsx";

class Template extends React.Component {
    render() {
        return (
            <div>
                <TopBar
                    language={ this.props.language }
                    theme={ this.props.theme }
                    toDarkTheme={ this.props.toDarkTheme }
                    toLightTheme={ this.props.toLightTheme }
                    toZH_CN = { this.props.toZH_CN }
                    toEN_US = { this.props.toEN_US }
                    toJA_JP = { this.props.toJA_JP }
                />
                <MainTemplate theme={ this.props.theme }>
                    { this.props.children }
                </MainTemplate>
                <Footer language={ this.props.language } theme={ this.props.theme }/>
            </div>
        );
    }
}

export default Template;