import React from "react";
import "../../sass/components/mainTemplate.scss";

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