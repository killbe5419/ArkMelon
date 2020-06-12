import React from "react";
import ReactDOM from "react-dom";
import TopBar from "./components/TopBar.jsx";
import MainTemplate from "./components/MainTemplate.jsx";
import Footer from "./components/Footer.jsx";

class App extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <MainTemplate />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react-root")
)