import React from "react";
import "../../sass/modules/mainTemplate.scss";

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