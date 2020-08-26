import React from "react";
import axios from "axios";
import Template from "../components/Template.jsx";
import "../../sass/pages/pickcard.scss";
import gp from "../tools/gp";

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

class PickImg extends React.Component {
    render() {
        return (
            <div className="pick-img">
                <img alt="" src={`../../../images/pools/${this.props.poolType}/${this.props.poolName.replace(/ /,"_")}.jpg` } />
            </div>
        );
    }
}

class PickUpInfo extends React.Component {
    componentDidMount() {
        this.props.getPickup();
    }

    render() {
        let pickupBoxSix,pickupBoxFive,pickupBoxFour;
        if(this.props.info.pickup.six.length !== 0) {
            const sixList = this.props.info.pickup.six.map(x =>
                <div key={x}>
                    <img  className="img" alt=" " src={`../../../images/character/icon/${x}.png`} />
                    <p className="6">{ x }</p>
                </div>
            )
            pickupBoxSix =
                <div className="pickup-box">
                    <p className="6">★★★★★★</p>
                    <div className="pickup-showcard">{ sixList }</div>
                    <p>(占6★出率的50%)</p>
                </div>
        } else {
            pickupBoxSix = null;
        }

        if(this.props.info.pickup.five.length !== 0) {
            const fiveList = this.props.info.pickup.five.map(x =>
                <div key={x}>
                    <img  className="img" alt=" " src={`../../../images/character/icon/${x}.png`} />
                    <p className="5">{ x }</p>
                </div>
            )
            pickupBoxFive = (
                <div className="pickup-box">
                    <p className="5">★★★★★</p>
                    <div className="pickup-showcard">{ fiveList }</div>
                    <p>(占5★出率的50%)</p>
                </div>
            )
        } else {
            pickupBoxFive = null;
        }

        if(this.props.info.pickup.four.length !== 0) {
            const fourList = this.props.info.pickup.four.map(x =>
                <div key={x}>
                    <img  className="img" alt=" " src={`../../../images/character/icon/${x}.png`} />
                    <p className="4">{ x }</p>
                </div>
            )
            pickupBoxFour = (
                <div className="pickup-box">
                    <p className="4">★★★★</p>
                    <div className="pickup-showcard">{ fourList }</div>
                    <p>(占4★出率的20%)</p>
                </div>
            )
        } else {
            pickupBoxFour = null;
        }

        return (
            <div className="pickup-info">
                <p className="pickup-description">【{ this.props.poolName }】寻访中以下干员获得概率提升</p>
                { pickupBoxSix }
                { pickupBoxFive }
                { pickupBoxFour }
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

class PickInfo1 extends React.Component {
    render() {
        return (
            <div className="pick-info">
                <p>抽取次数:{ this.props.info.pickNum }</p>
                <p>没有抽到6★的次数: { this.props.info.g }</p>
                <p>抽到6★的概率:  {  `${ gp(Number(this.props.info.g)) + 2} %`}</p>
                <p>花费的合成玉: { this.props.info.coin }</p>
                <p>花费的至纯源石: { Math.round(this.props.info.coin / 180)}</p>
            </div>
        );
    }
}

class PickInfo2 extends React.Component {
    render() {
        return (
            <div className="pick-info">
                <p>抽到6★个数: { this.props.info.six.length } </p>
                <p>抽到5★个数: { this.props.info.five.length } </p>
                <p>抽到4★个数: { this.props.info.four.length } </p>
                <p>抽到3★个数: { this.props.info.three.length } </p>
            </div>
        );
    }
}

class PickMenu extends React.Component {
    render() {
        return (
            <div className="pick-menu">
                <Buttons buttons={ this.props.info.buttons }/>
                <PickInfo1 info={ this.props.info }/>
                <PickInfo2 info={ this.props.info }/>
            </div>
        );
    }
}

class PickOne_Case extends React.Component {
    render() {
        return (
            <div className="case" key={ this.props.data._id }>
                <p className={ this.props.data.rare }> { this.props.data.name } </p>
                <img className="card img"  src={ `../../../images/character/half/${ this.props.data.name }.png` } alt="card"/>
            </div>
        );
    }
}

class PickTen_Case extends React.Component {
    render() {
        const list = this.props.data.map( x =>
            <div className="case" key={ x.id } >
                <p className={ x.rare }>{ x.name }</p>
                <img className="card img" src={ `../../../images/character/half/${ x.name }.png` } alt="card" />
            </div>
        );

        list.splice(5,0,<br key="br"/>);

        return (
            <div className="pickTenCase">
                { list }
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

        if(this.props.method === "pickTen") {
            return (
                <PickTen_Case data={ this.props.data } />
            );
        }
        /*
        if(this.props.method === "calculate") {
            return (
                <Calculate_Case input={ this.props.input } />
            );
        }
        */
        return null;
    }
}

class Record extends React.Component {
    render() {
        if(this.props.data.length !== 0) {
             const list = this.props.data.map( x =>
                <img className="img" key={ x.key } alt=" " src={ `../../../images/character/icon/${ x.name }.png` } />
            )

            for(let i=0;i<list.length;i++) {
                if(i % 10 === 0 ) {
                    list.splice(i,0,<br className="br" key={"br" + i } />)
                }
            }
            list.shift();

            return (
                <div className="record">
                    <div className={ this.props.rare }>{ this.props.rare }★</div>
                    <div className="pick-img-container">
                        { list }
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

class RecordContainer extends React.Component {
    render() {
        if(this.props.info.six.length !== 0 || this.props.info.five.length !== 0 || this.props.info.four.length !== 0) {
            return (
                <div className="record-container">
                    <Record data={ this.props.info.six } rare="6"/>
                    <Record data={ this.props.info.five } rare="5"/>
                    <Record data={ this.props.info.four } rare="4"/>
                </div>
            );
        } else {
            return null;
        }
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
                <Case method={ this.props.info.method } data={ this.props.info.data }/>
                <RecordContainer info={ this.props.info } />
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
                    name: "清空记录",
                    func: this.clearRecord
                },
                {
                    key: 3,
                    name: "寻访计算",
                    func: this.calc
                }
            ],
            pickup: {
                six:[],
                five:[],
                four:[],
            },
            coin: 0, //合成玉
            coinUrl: "../../../images/materials/coin.png",
            coinAlt: "orundum",
            pickNum: 0,
            g: 0,
            six: [],
            five: [],
            four: [],
            three: [],
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
                g: this.state.g
            }
        };
        axios.get("/pickOne",data)
            .then(res => {
                this.setState({
                    g: res.data.g,
                    method: "pickOne",
                    data: res.data,
                    pickNum: this.state.pickNum + 1,
                    coin: this.state.coin + 600,
                })
                if(res.data.rare === 6) {
                    alert(`哇！抽到了6★干员: ${ res.data.name }`);
                    let arr = this.state.six;
                    const newObj = {
                        key: this.state.pickNum,
                        name:res.data.name,
                    }
                    arr.push(newObj);
                    this.setState({
                        six: arr
                    })
                }
                else if(res.data.rare === 5) {
                    let arr = this.state.five;
                    const newObj = {
                        key: this.state.pickNum,
                        name:res.data.name,
                    }
                    arr.push(newObj);
                    this.setState({
                        five: arr
                    })
                }
                else if(res.data.rare === 4) {
                    let arr = this.state.four;
                    const newObj = {
                        key: this.state.pickNum,
                        name:res.data.name,
                    }
                    arr.push(newObj);
                    this.setState({
                        four: arr
                    })
                } else {
                    let arr = this.state.three;
                    arr.push({
                        key: this.state.pickNum,
                        name:res.data.name,
                    });
                    this.setState({
                        three: arr
                    })
                }
                console.log(this.state.six,this.state.five,this.state.four);
            })
    }

    pickTen = () => {
        const data = {
            params: {
                type: "pick",
                method: "pickTen",
                poolName: this.props.poolName,
                g: this.state.g
            }
        };
        axios.get("/pickTen",data)
            .then(res => {
                console.log(res.data);
                this.setState({
                    g: res.data.g,
                    method: "pickTen",
                    data: res.data.array,
                    pickNum: this.state.pickNum + 10,
                    coin: this.state.coin + 6000,
                })
                for(let i=0;i<res.data.array.length;i++) {
                    if(res.data.array[i].rare === 6) {
                        alert(`哇！抽到了6★干员: ${ res.data.array[i].name }`);
                        let arr = this.state.six;
                        const newObj = {
                            key: `${this.state.pickNum} + ${res.data.array[i].id}`,
                            name:res.data.array[i].name,
                        }
                        arr.push(newObj);
                        this.setState({
                            six: arr
                        })
                    }
                    else if(res.data.array[i].rare === 5) {
                        let arr = this.state.five;
                        const newObj = {
                            key: `${this.state.pickNum} + ${res.data.array[i].id}`,
                            name:res.data.array[i].name,
                        }
                        arr.push(newObj);
                        this.setState({
                            five: arr
                        })
                    }
                    else if(res.data.array[i].rare === 4) {
                        let arr = this.state.four;
                        const newObj = {
                            key: `${this.state.pickNum} + ${res.data.array[i].id}`,
                            name:res.data.array[i].name,
                        }
                        arr.push(newObj);
                        this.setState({
                            four: arr
                        })
                    } else {
                        let arr = this.state.three;
                        const newObj = {
                            key: `${this.state.pickNum} + ${res.data.array[i].id}`,
                            name:res.data.array[i].name,
                        }
                        arr.push(newObj);
                        this.setState({
                            three: arr
                        })
                    }
                }
            })
    }

    clearRecord = () => {
        this.setState({
            coin: 0, //合成玉
            pickNum: 0,
            g: 0,
            six: [],
            five: [],
            four: [],
            three: [],
            method: "",
            data:{}
        })
    }

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

