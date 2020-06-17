import React from "react";
import TopBar from "./components/TopBar.jsx";
import MainTemplate from "./components/MainTemplate.jsx";
import Footer from "./components/Footer.jsx";

class Template extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <MainTemplate >
                    { this.props.children }
                </MainTemplate>
                <Footer />
            </div>
        );
    }
}

export default Template;