import React from "react";
import { Title } from "../components/basic.jsx";
import "../../sass/pages/404.scss";


class _404 extends React.Component {
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
            <Title className="message" content={ this.state.title }/>
        );
    }
}

export default _404;