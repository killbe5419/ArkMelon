import React from "react";
import "../../sass/templatePage.scss";
import Template from "../components/Template.jsx";

class TemplatePage extends React.Component {
    render() {
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
            </Template>
        );
    }
}

export default TemplatePage;