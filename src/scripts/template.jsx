import React from "react";
import TopBar from "./components/TopBar.jsx";
import MainTemplate from "./components/MainTemplate.jsx";
import Footer from "./components/Footer.jsx";

class Template extends React.Component {
    render() {
        return (
            <div>
                <TopBar
                    language={ this.props.language }
                    theme={ this.props.theme }
                    toDarkTheme={ this.props.toDarkTheme }
                    toLightTheme={ this.props.toLightTheme }
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