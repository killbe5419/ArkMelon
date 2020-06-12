import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./components/TopBar.jsx";
import MainTemplate from "./components/MainTemplate.jsx";
import { Title } from "./components/basic.jsx";
import Footer from "./components/Footer.jsx";
import "../styles/404.css";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:{
                tag: "title",
                name: "Oops! There's something wrong happened!",
                description: "we can't found what you want.",
            },
        }
    }

    render() {
        return (
            <div>
                <TopBar />
                <MainTemplate>
                    <Title className="message" content={ this.state.title }/>
                </MainTemplate>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-root")
)