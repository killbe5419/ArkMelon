import React from "react";
import "../../styles/components/MainTemplate.css";

class MainTemplate extends React.Component {
    render() {
        return (
            <div className="main">
                { this.props.children }
            </div>
        );
    }
}

export default MainTemplate;