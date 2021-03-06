import React from "react";
import axios from "axios";
import "../../sass/pages/test.scss";
import LoadingIcon from "../components/icons/loadingIcon.jsx";
class Icon extends React.Component {

    showNum = () => {
        console.log(`num: ${this.props.num} cubeNum: ${this.props.cubeNum}`);
    }

    render() {
        this.showNum();
        let list = Array(Number(this.props.cubeNum));
        for(let i=0;i<list.length;i++) {
            list[i] = <div key={i} className={`wait-cube-${ this.props.num }-${i+1}`}> </div>
        }
        return (
            <div className={`icon${ this.props.num }-container`}>
                { list }
            </div>
        );
    }
}

class Test extends React.Component {

    try = () => {
        const data = {
            params:{
                type: "search",
                method: "findAll"
            }
        };
        axios.get("/findAll",data)
            .then(res => {
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <Icon num="1" cubeNum="4"/>
                <Icon num="2" cubeNum="4"/>
                <LoadingIcon className="loading-icon"/>
                <div className="plus-icon"> </div>
                <button onClick={ () => this.try() }>click!</button>
            </div>
        )
    }
}

export default Test;