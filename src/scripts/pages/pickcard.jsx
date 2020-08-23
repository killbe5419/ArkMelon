import React from "react";
import axios from "axios";
import Template from "../components/Template.jsx";
import "../../sass/pages/pickcard.scss";

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar-pick">
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
                <p>there are some words in here.</p>
            </div>
        );
    }
}

class PickOne_Case extends React.Component {
    render() {
        return (
            <div className="case">
                <p className={ this.props.data.rare }> { this.props.data.name } </p>
                <img className="card" src={ `../../../images/character/half/${this.props.data.name}.png` } alt="card"/>
            </div>
        );
    }
}

class Case extends React.Component {
    render() {

        if(this.props.method === "pickOne") {
            return (
                <PickOne_Case data={ this.props.data }/>
            );
        }

        /*if(this.props.method === "pickTen") {
            return (
                <PickTen_Case input={ this.props.input } />
            );
        }
        if(this.props.method === "calculate") {
            return (
                <Calculate_Case input={ this.props.input } />
            );
        } */
        return null;
    }
}


class PickImg extends React.Component {
    render() {
        return (
            <div className="pick-img">
                <img alt="" src={`../../../images/pools/${this.props.poolType}/${this.props.poolName}.jpg` } />
            </div>
        );
    }
}

class PickUpInfo extends React.Component {
    componentDidMount() {
        this.props.getPickup();
    }

    render() {
        const sixList = this.props.info.pickup.six.map(x =>
            <div key={x}>
                <img  className="img6" alt=" " src={`../../../images/character/icon/${x}.png`} />
                <p className="6">{ x }</p>
            </div>
        )
        const fiveList = this.props.info.pickup.five.map(x =>
            <div key={x}>
                <img className="img5" alt=" " src={`../../../images/character/icon/${x}.png`} />
                <p className="5">{ x }</p>
            </div>
        )
        const fourList = this.props.info.pickup.four.map(x =>
            <div key={x}>
                <img  className="img4" alt=" " src={`../../../images/character/icon/${x}.png`} />
                <p className="4">{ x }</p>
            </div>
        )
        return (
            <div className="pickup-info">
                <p className="pickup-description">【{ this.props.poolName }】寻访中以下干员获得概率提升</p>
                <div className="pickup-box">
                    <p className="6">★★★★★★</p>
                    { sixList }
                    <p>(占6★出率的50%)</p>
                </div>
                <div className="pickup-box">
                    <p className="5">★★★★★</p>
                    { fiveList }
                    <p>(占5★出率的50%)</p>
                </div>
                <div className="pickup-box">
                    <p className="4">★★★★</p>
                    { fourList }
                    <p>(占4★出率的20%)</p>
                </div>
            </div>
        );
    }
}

class PickTitle extends React.Component {
    render() {
        return (
            <div className="pick-title">
                <PickImg poolName={ this.props.poolName } poolType={ this.props.poolType }/>
                <PickUpInfo
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                    getPickup={ this.props.getPickup }
                />
            </div>
        );
    }
}

class Buttons extends React.Component {
    render() {
        const buttonList = this.props.buttons.map(x =>
            <button
                key={ x.key }
                className="menu-button"
                onClick={ x.func }
            >{ x.name }</button>
        )
        return (
            <div className="buttons">
                { buttonList }
            </div>
        );
    }
}

class PickInfo extends React.Component {
    render() {
        return (
            <div className="pick-info">
                <p>抽取次数:{ this.props.info.pickNum }</p>
                <p>抽到6星的概率:{  `${Number(this.props.info.g) + 2} %`}</p>
                <p>花费的合成玉: { this.props.info.coin }</p>
            </div>
        );
    }
}

class PickMenu extends React.Component {
    render() {
        return (
            <div className="pick-menu">
                <Buttons buttons={ this.props.info.buttons }/>
                <PickInfo info={ this.props.info }/>
            </div>
        );
    }
}

class Pick extends React.Component {
    render() {
        return (
            <div className="pick">
                <PickTitle
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                    getPickup={ this.props.getPickup }
                />
                <PickMenu
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                />
                <Case />
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className="main-pick">
                <SideBar />
                <div className="blank"> </div>
                <Pick
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                    pickOne={ this.props.pickOne }
                    pickTen={ this.props.pickTen }
                    calc={ this.props.calc }
                    getPickup={ this.props.getPickup }
                />
            </div>
        );
    }
}

class Pickcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {
                    key: 0,
                    name: "寻访一次",
                    func: this.pickOne
                },
                {
                    key: 1,
                    name: "寻访十次",
                    func: this.pickTen
                },
                {
                    key: 2,
                    name: "结果计算",
                    func: this.calc
                }
            ],
            coin: 6000, //合成玉
            coinUse: false,
            coinUrl: "../../../images/materials/coin.png",
            coinAlt: "orundum",
            pickNum: 0,
            g: 0,
            pickup: {
                six:[],
                five:[],
                four:[]
            },
            method: "",
            data:{}

        }
    }

    componentDidMount() {
        this.getPickup();
    }

    getPickup = () => {
        const data = {
            params: {
                type: "getPickup",
                poolName: this.props.poolName
            }
        }
        axios.get("/getPickup", data)
            .then(res => {
                console.log(res.data);
                this.setState({
                    pickup: res.data
                })
            })
    }

    pickOne = () => {
        const data = {
            params: {
                type: "pick",
                method: "pickOne",
                poolName: this.props.poolName,
                pickNum: this.state.pickNum
            }
        };

        axios.get("/pickOne",data)
            .then(res => {
                console.log(res.data);

                this.setState({
                    pickNum: res.data.pickNum,
                    method: "pickOne",
                    data: res.data
                })
            })
    }

    pickTen = () => {}
    calc = () => {}

    render() {
        return (
            <Template
                language={ this.props.language }
                theme={ this.props.theme }
                toDarkTheme={ this.props.toDarkTheme }
                toLightTheme={ this.props.toLightTheme }
                toZH_CN = { this.props.toZH_CN }
                toEN_US = { this.props.toEN_US }
                toJA_JP = { this.props.toJA_JP }
            >
               <Main
                   poolName={ this.props.poolName }
                   poolType={ this.props.poolType }
                   info={ this.state }
                   pickOne={ this.pickOne }
                   pickTen={ this.pickTen }
                   calc={ this.calc }
                   getPickup={ this.getPickup }
               />
            </Template>
        );
    }
}

export default Pickcard;

