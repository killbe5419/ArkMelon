import React from "react";
import "../../sass/templatePage.scss";
import Template from "../components/Template.jsx";

class TemplatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "light-theme"
        }
    }


    toDarkTheme = () => {
        console.log("to-dark");
        this.setState({
            theme: "dark-theme"
        })
    }

    toLightTheme = () => {
        console.log("to-light");
        this.setState({
            theme: "light-theme"
        })
    }

    render() {

        return (
            <Template
                language={ this.props.language }
                theme={ this.state.theme }
                toDarkTheme={ this.toDarkTheme }
                toLightTheme={ this.toLightTheme }
            >
            </Template>
        );
    }
}

export default TemplatePage;