import React from "react";
import "../../styles/components/MainTemplate.css";

class MainTemplate extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default MainTemplate;