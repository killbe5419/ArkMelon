import React from "react";
import TopBar from "./components/TopBar.jsx";
import MainTemplate from "./components/MainTemplate.jsx";
import Footer from "./components/Footer.jsx";

class Template extends React.Component {
    render() {
        return (
            <div>
                <TopBar language={ this.props.language }/>
                <MainTemplate >
                    { this.props.children }
                </MainTemplate>
                <Footer language={ this.props.language }/>
            </div>
        );
    }
}

export default Template;