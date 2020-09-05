import React from "react";
import axios from "axios";
import Template from "../components/Template.jsx";
import SideBarPick from "../components/SideBarPick.jsx";
import CalcIcon from "../components/icons/calcIcon.jsx";
import "../../sass/pages/pickcard.scss";
import gp from "../tools/gp";

class PoolImg extends React.Component {
    render() {
        return (
            <div className="pool-img">
                <img alt="" src={`../../../images/pools/${this.props.poolType}/${this.props.poolName}.jpg` } />
            </div>
        );
    }
}

class PickupContainer extends React.Component {
    render() {
        if(this.props.hasOwnProperty("name")) {
            return (
                <div className="pickup-container" >
                    <div className="pickup-img-container">
                        <img  className="img" alt=" " src={`../../../images/character/icon/${this.props.name}.png`} />
                    </div>
                    <div className="pickup-name-container">
                        <p className={ this.props.rare }>{ this.props.name }</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

class PickupInfoContent extends React.Component {
    render() {
        if(this.props.data.length !== 0) {
            const list = this.props.data.map(x =>
                <PickupContainer key={ x } name={ x } rare={ this.props.rare }/>
            )
            return (
                <div className="pickup-showcard">
                    { list }
                </div>
            );
        } else {
            return null;
        }
    }
}

class PickupInfoContainer extends React.Component {
    render() {
        if(this.props.data.length !== 0) {
            let list = [];
            for(let i=0;i<this.props.data.length;i+=2) {
                list.push(
                    <PickupInfoContent
                        key={i/2}
                        data={ this.props.data[i+1] !== undefined
                            ? [this.props.data[i],this.props.data[i+1]]
                            : [this.props.data[i]]}
                        rare={ this.props.rare }
                    />
                );
            }
            return (
                <div>
                    <div className="pickup-box">
                        <p className={ this.props.rare }>{ this.props.star }</p>
                        { list }
                        <p>(占<span className={this.props.rare}>{ this.props.rare }★</span>出率的 { this.props.rate }%)</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

class PickUpInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            star: {six: "★★★★★★", five: "★★★★★", four: "★★★★", three: "★★★", two: "★★", one: "★"}
        }
    }

    render() {
        return (
            <div className="pickup-info">
                <p className="pickup-description">【{ this.props.poolName }】寻访中以下干员获得概率提升</p>
                <PickupInfoContainer
                    data={ this.props.data.six }
                    star={ this.state.star.six }
                    rare="6"
                    rate={this.props.data.type === "limit" ? 75 : 50}
                />
                <PickupInfoContainer
                    data={ this.props.data.five }
                    star={ this.state.star.five }
                    rare="5"
                    rate="50"
                />
                <PickupInfoContainer
                    data={ this.props.data.four }
                    star={ this.state.star.four }
                    rare="4"
                    rate="20"
                />
            </div>
        )
    }
}

class PickTitle extends React.Component {
    render() {
        return (
            <div className="pick-title">
                <PoolImg poolName={ this.props.poolName } poolType={ this.props.poolType }/>
                <PickUpInfo
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    data={ this.props.info.pickup }
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
        if(this.props.info.method === "calculation") {
            return (
                <div>
                    <div className="pick-info">
                        <p>抽取次数: { this.props.info.pickNum }</p>
                        <p>抽取目标干员的次数: { this.props.info.count }</p>
                        <p>抽到目标干员的概率: { `${(this.props.info.targetP * 100).toFixed(2)}%`} </p>
                        <p>花费的合成玉: { this.props.info.coin }</p>
                        <p>花费的至纯源石: { Math.round(this.props.info.coin / 180)}</p>
                    </div>
                    <div className="pick-info">
                        <p>抽到<span className="6">6★</span>个数: { this.props.info.six.num } </p>
                        <p>抽到<span className="5">5★</span>个数: { this.props.info.five.num } </p>
                        <p>抽到<span className="4">4★</span>个数: { this.props.info.four.num } </p>
                        <p>抽到<span className="3">3★</span>个数: { this.props.info.three.num } </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="pick-info">
                        <p>抽取次数:{ this.props.info.pickNum }</p>
                        <p>没有抽到6★的次数: { this.props.info.g }</p>
                        <p>抽到6★的概率:  {  `${ gp(Number(this.props.info.g)) + 2} %`}</p>
                        <p>花费的合成玉: { this.props.info.coin }</p>
                        <p>花费的至纯源石: { Math.round(this.props.info.coin / 180)}</p>
                    </div>
                    <div className="pick-info">
                        <p>抽到<span className="6">6★</span>个数: { this.props.info.six.num } </p>
                        <p>抽到<span className="5">5★</span>个数: { this.props.info.five.num } </p>
                        <p>抽到<span className="4">4★</span>个数: { this.props.info.four.num } </p>
                        <p>抽到<span className="3">3★</span>个数: { this.props.info.three.num } </p>
                    </div>
                </div>
            );
        }
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

class PickOneCase extends React.Component {
    render() {
        return (
            <div className="case" key={ this.props.data._id }>
                <p className={ this.props.data.rare }> { this.props.data.name } </p>
                <div className="pick-img">
                    <img className={`card img${this.props.data.rare}`}  src={ `../../../images/character/half/${ this.props.data.name }.png` } alt="card"/>
                    <img className={`class-icon`} src={ `../../../images/class/${ this.props.data.class }.png` } alt="class-icon" />
                    <img className={`rare-icon`} src={ `../../../images/rare/${ this.props.data.rare }.png` } alt="rare-icon" />
                </div>
            </div>
        );
    }
}

class PickTenCase extends React.Component {
    render() {
        const list = this.props.data.map( x =>
            <div className="case" key={ x.id } >
                <p className={ x.rare }>{ x.name }</p>
                <div className="pick-img">
                    <img className={`card img${x.rare}`} src={ `../../../images/character/half/${ x.name }.png` } alt="card" />
                    <img className={`class-icon`} src={ `../../../images/class/${ x.class }.png` } alt="class-icon" />
                    <img className={`rare-icon`} src={ `../../../images/rare/${ x.rare }.png` } alt="rare-icon" />
                </div>

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
                <PickOneCase data={ this.props.data }/>
            );
        }

        if(this.props.method === "pickTen") {
            return (
                <PickTenCase data={ this.props.data } />
            );
        }

        if(this.props.method === "calculation") {
            return null;
        }

        return null;
    }
}

class CalcWaiter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            point: "",
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            if(this.state.point === "...") {
                this.setState({
                    point: ""
                })
            } else {
                this.setState({
                    point: this.state.point + ".",
                })
            }
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        if(this.props.running) {
            return (
                <div className="wait-calc"
                     style={{ width: window.innerWidth, height: window.innerHeight }}
                     onWheel={ e => e.preventDefault() }
                >
                    <div className="bkg-blur"> </div>
                    <CalcIcon className="calc-icon-container"/>
                    <p className="calc-description">{`计算中,请稍候${ this.state.point }`}</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

class Record extends React.Component {
    render() {
        if(this.props.data.arr.length !== 0) {
             const list = this.props.data.arr.map( x =>
                <img className={`img ${ x.name === this.props.targetName ? "target" : ""}`} key={ x.id } alt=" " src={ `../../../images/character/icon/${ x.name }.png` } />
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
        if(this.props.info.six.num !== 0 || this.props.info.five.num !== 0 || this.props.info.four.num !== 0) {
            return (
                <div className="record-container">
                    <Record data={ this.props.info.six }  targetName={ this.props.info.targetName } rare="6"/>
                    <Record data={ this.props.info.five }  targetName={ this.props.info.targetName } rare="5"/>
                    <Record data={ this.props.info.four }  targetName={ this.props.info.targetName } rare="4"/>
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
            <div className={`pick ${ this.props.theme }`}>
                <PickTitle
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                />
                <PickMenu
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                />
                <Case method={ this.props.info.method } data={ this.props.info.data }/>
                <RecordContainer info={ this.props.info } />
                <CalcWaiter running={this.props.info.runningCalc} />
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div className={`main-pick ${ this.props.theme }`}>
                <SideBarPick
                    data={ this.props.info.sidebar }
                    poolType={ this.props.info.poolType }
                    poolName={ this.props.poolName }
                    theme={ this.props.theme }
                />
                <div className="blank"> </div>
                <Pick
                    poolName={ this.props.poolName }
                    poolType={ this.props.poolType }
                    info={ this.props.info }
                    getPickup={ this.props.getPickup }
                    theme={ this.props.theme }
                />
            </div>
        );
    }
}

class Pickcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            handlePoolList: false,
            sidebar: [],
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
            pickup: {six:[], five:[], four:[], type:""},
            poolType: "",
            poolCode: "",
            coin: 0, //合成玉
            coinUrl: "../../../images/materials/coin.png",
            coinAlt: "orundum",
            pickNum: 0,
            count: 0,
            g: 0,
            six: {num: 0, arr:[]},
            five: {num: 0, arr:[]},
            four: {num: 0, arr:[]},
            three: {num: 0, arr:[]},
            method: "",
            runningCalc: false,
            data:{}
        }
    }

    componentDidMount() {
        this.getPoolInfo();
        this.getPickup();
        this.getPoolList();
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        if(this.state.data !== prevState.data) {
            this.setState({
                runningCalc: false
            })
        }
        if(this.state.poolCode !== "" && this.state.sidebar.length !== 0) {
            if(this.state.handlePoolList !== true) {
                this.handlePoolList();
            }
        }
    }

    getPickup = () => {
        const data = {
            params: {
                type: "search",
                method: "getPickup",
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

    getPoolInfo = () => {
        const str = window.location.href;
        const poolType = str.split("//")[1].split("/")[1];
        const poolCode = str.split("//")[1].split("/")[2];
        this.setState({
            poolType,
            poolCode
        })
    }


    handlePoolList = () => {
        const arrSidebar = this.state.sidebar;
        if(Array.isArray(arrSidebar)) {
            arrSidebar.forEach( x => {
                if(Array.isArray(x.contents)) {
                    x.contents.forEach( (y, j, arrY) => {
                        if(y.url.split("/")[2] === this.state.poolCode) {
                            arrY.splice(j,1);
                            arrY.unshift(y);
                            this.setState({
                                handlePoolList: true
                            })
                        }
                    })
                }
            })
        }
    }

    getPoolList = () => {
        const data = {
            params: {
                type: "search",
                method: "getPoolList",
                poolType: "all"
            }
        }
        axios.get("/getPoolList",data)
            .then(res => {
                console.log(res.data);
                const tmp = [
                    {
                        key: "event",
                        name: "活动寻访",
                        type: "eventPool",
                        contents: res.data.event.reverse()
                    },
                    {
                        key: "limit",
                        name: "限定寻访",
                        type: "limitPool",
                        contents: res.data.limit.reverse()
                    },
                    {
                        key: "regular",
                        name: "常驻标准寻访",
                        type: "regularPool",
                        contents: res.data.regular.reverse()
                    }
                ];
                this.setState({
                    sidebar: tmp
                })
            })
    }

    showRecord = () => {
        const data = this.state.data;
        if(this.state.method === "pickOne") {
            if(data.rare === 6) {
                alert(`哇！抽到了6★干员: ${ data.name }`);
                let arr = this.state.six.arr;
                const newObj = {
                    id: this.state.pickNum,
                    name: data.name,
                }
                arr.push(newObj);
                this.setState({
                    six: {
                        num: arr.length,
                        arr
                    }
                })
            }
            else if(data.rare === 5) {
                let arr = this.state.five.arr;
                const newObj = {
                    id: this.state.pickNum,
                    name: data.name,
                }
                arr.push(newObj);
                this.setState({
                    five: {
                        num: arr.length,
                        arr
                    }
                })
            }
            else if(data.rare === 4) {
                let arr = this.state.four.arr;
                const newObj = {
                    id: this.state.pickNum,
                    name: data.name,
                }
                arr.push(newObj);
                this.setState({
                    four: {
                        num: arr.length,
                        arr
                    }
                })
            } else {
                let arr = this.state.three.arr;
                arr.push({
                    id: this.state.pickNum,
                    name: data.name,
                });
                this.setState({
                    three: {
                        num: arr.length,
                        arr
                    }
                })
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].rare === 6) {
                    alert(`哇！抽到了6★干员: ${data[i].name}`);
                    let arr = this.state.six.arr;
                    const newObj = {
                        id: this.state.pickNum + i,
                        name: data[i].name,
                    }
                    arr.push(newObj);
                    this.setState({
                        six: {
                            num: arr.length,
                            arr
                        }
                    })
                } else if (data[i].rare === 5) {
                    let arr = this.state.five.arr;
                    const newObj = {
                        id: this.state.pickNum + i,
                        name: data[i].name,
                    }
                    arr.push(newObj);
                    this.setState({
                        five: {
                            num: arr.length,
                            arr
                        }
                    })
                } else if (data[i].rare === 4) {
                    let arr = this.state.four.arr;
                    const newObj = {
                        id: this.state.pickNum + i,
                        name: data[i].name,
                    }
                    arr.push(newObj);
                    this.setState({
                        four: {
                            num: arr.length,
                            arr
                        }
                    })
                } else {
                    let arr = this.state.three.arr;
                    const newObj = {
                        key: this.state.pickNum + i,
                        name: data[i].name,
                    }
                    arr.push(newObj);
                    this.setState({
                        three: {
                            num: arr.length,
                            arr
                        }
                    })
                }
            }
        }
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
                if(res.data === "refresh") {
                    alert("服务器已重置，已自动刷新页面");
                    location.reload();
                    return;
                }
                console.log(res.data);
                this.setState({
                    g: res.data.g,
                    method: "pickOne",
                    data: res.data,
                    pickNum: this.state.pickNum + 1,
                    coin: this.state.coin + 600,
                })
                this.showRecord();
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
                if(res.data === "refresh") {
                    alert("服务器已重置，已自动刷新页面");
                    location.reload();
                    return;
                }
                this.setState({
                    g: res.data.g,
                    method: "pickTen",
                    data: res.data.array,
                    pickNum: this.state.pickNum + 10,
                    coin: this.state.coin + 6000,
                })
                this.showRecord();
            })
    }

    calc = () => {
        const input = {};
        input.target = prompt("请输入干员名称(存在于该卡池中): ");
        if(input.target === null) return;
        const data = {
            params: {
                type: "search",
                method: "searchName",
                poolName: this.props.poolName,
                name: input.target,
            }
        }
        axios.get("/searchName",data)
            .then(res => {
                console.log(res.data);
                if(!res.data) {
                    alert("请输入正确的干员名称！");
                } else {
                    input.num = Number(prompt("请输入干员数量: "));
                    console.log(input.num);
                    if(Number.isNaN(input.num)) {
                        alert("请输入正确的干员数量！");
                    } else {
                        if(input.num === 0) {
                            alert("请输入正确的干员数量！");
                        } else {
                            this.clearRecord();
                            this.setState({
                                runningCalc: true,
                            });
                            const data = {
                                params: {
                                    type: "calculation",
                                    poolName: this.props.poolName,
                                    target: input.target,
                                    num: input.num
                                }
                            }
                            axios.get("/calc",data)
                                .then(res => {
                                    console.log(res.data);
                                    if(res.data === "refresh") {
                                        alert("服务器已重置，已自动刷新页面");
                                        location.reload();
                                        return;
                                    }
                                    if(res.data.pickNum <= 1500) {
                                        this.setState({
                                            method: "calculation",
                                            targetName: input.target,
                                            targetNum: res.data.count,
                                            data: res.data.array,
                                            pickNum: res.data.pickNum,
                                            targetP: res.data.percentage,
                                            coin: res.data.pickNum * 600,
                                            count: res.data.count,
                                            six: res.data.six,
                                            five: res.data.five,
                                            four: res.data.four,
                                            three: res.data.three,
                                        })
                                    } else {
                                        alert(`由于抽取次数过多，仅显示数据结果`);
                                        this.setState({
                                            method: "calculation",
                                            targetName: input.target,
                                            targetNum: res.data.count,
                                            data: res.data.array,
                                            pickNum: res.data.pickNum,
                                            targetP: res.data.percentage,
                                            count: res.data.count,
                                            coin: res.data.pickNum * 600,
                                            six: {
                                                num: res.data.six.num,
                                                arr:[]
                                            },
                                            five: {
                                                num: res.data.five.num,
                                                arr:[]
                                            },
                                            four: {
                                                num: res.data.four.num,
                                                arr:[]
                                            },
                                            three: {
                                                num: res.data.three.num,
                                                arr:[]
                                            },
                                        })
                                    }
                                    if(res.data.overflow) alert(`已超过处理临界值 返回抽取${res.data.pickNum}次的结果`);
                                })
                        }
                    }
                }
            })
    }

    clearRecord = () => {
        this.setState({
            coin: 0, //合成玉
            pickNum: 0,
            g: 0,
            six: {num: 0, arr:[]},
            five: {num: 0, arr:[]},
            four: {num: 0, arr:[]},
            three: {num: 0, arr:[]},
            method: "",
            data:{},
            targetName: "",
            targetNum: 0,
            targetP: 0
        })
    }

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
                   theme={ this.props.theme }
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

