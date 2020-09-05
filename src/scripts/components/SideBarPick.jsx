import React from "react";
import "../../sass/modules/sidebarPick.scss";

class SideBarMenuDropdown extends React.Component {
    render() {
        if(this.props.display) {
            const list = this.props.data.contents.map( x =>
                <a className={ x.name === this.props.poolName ? "sidebar-target" : ""} key={ x._id } href={ x.url }>{ x.name }</a>
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
        if(this.props.poolType === this.props.data.type) {
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
                        <p>{ this.props.data.name }</p>
                    </div>
                </div>
                <SideBarMenuDropdown
                    data={ this.props.data }
                    display={ this.state.display }
                    showMenu={ this.showMenu }
                    poolName={ this.props.poolName }
                    theme={ this.props.theme }
                />
            </div>
        );
    }
}

class SideBarPick extends React.Component {
    render() {
        const list = this.props.data.map( x =>
            <SideBarMenu
                key={x.key}
                data={ x }
                poolType={ this.props.poolType }
                poolName={ this.props.poolName }
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