import React from "react";
import "../../sass/modules/sidebarPick.scss";

class SideBarMenuDropdown extends React.Component {
    render() {
        if(this.props.display) {
            const list = this.props.data.map( x =>
                <a className={ x.name === this.props.poolName ? "sidebar-target" : ""} key={ x.name } href={ x.url }>{ x.name }</a>
            )
            return (
                <div className={`sidebar-menu-dropdown ${ this.props.theme }`}>
                    { list }
                </div>
            )
        } else {
            return null;
        }
    }
}

class SideBarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            status: "hide"
        }
    }

    componentDidMount() {
        this.checkPool();
    }

    checkPool = () => {
        console.log(this.props.poolType, this.props.type);
        if(this.props.poolType === this.props.type) {
            this.setState({
                display: true,
            })
        }
    }

    showMenu = () => {
        this.setState({
            display: !this.state.display,
        })
    }

    render() {
        return (
            <div className="sidebar-menu">
                <div className="sidebar-menu-title">
                    <div className="menu-icon-container">
                        <div
                            className={`menu-icon${this.state.display ? "-show": "-hide"} ${ this.props.theme }`}
                            onClick={ () => this.showMenu() }
                        > </div>
                    </div>
                    <div className={`menu-text-container ${ this.props.theme }`}>
                        <p>{ this.props.title }</p>
                    </div>
                </div>
                <SideBarMenuDropdown
                    data={ this.props.data }
                    display={ this.state.display }
                    poolName={ this.props.poolName }
                    theme={ this.props.theme }
                />
            </div>
        );
    }
}

class SideBarPick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            poolList: []
        }
    }

    componentDidMount() {
        this.handlePoolList();
    }

    handlePoolList = () => {
        const poolList = this.props.poolList;
        delete poolList.update;
        let out = [];

        Object.keys(poolList).forEach( x => {
            let title;
            if( x === "event") title = "活动寻访";
            else if( x === "limit") title = "限定寻访";
            else title = "常驻标准寻访";
            poolList[x].forEach((y,i,arr) => {
                if(y.name === this.props.poolName) {
                    arr.splice(i, 1);
                    arr.push(y);
                }
            })
            out.push({
                type: `${x}Pool`,
                title,
                arr: poolList[x].reverse()
            })
        })
        this.setState({
            poolList: out
        })
    }

    render() {
        const list = this.state.poolList.map( x =>
            <SideBarMenu
                key={ x.type }
                type={ x.type }
                title={ x.title }
                data={ x.arr }
                poolType={ this.props.poolType }
                poolName={ this.props.poolName }
                poolCode={ this.props.poolCode }
                theme={ this.props.theme }
            />
        )

        return (
            <div className={`sidebar-pick ${ this.props.theme }`}>
                { list }
            </div>
        );
    }
}

export default SideBarPick;