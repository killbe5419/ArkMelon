import React from "react";

class ImgA extends React.Component {
    render() {
        const span = this.props.input.name ? (<span>{ this.props.input.name }</span>) : null;
        return (
            <a className={ this.props.className } href={ this.props.input.href } >
                <img alt={ this.props.tag + this.props.input.key } src={ this.props.input.img } />
                { span }
            </a>
        );
    }
}

class DropdownMenu extends React.Component {
    render() {
        const tmp = this.props.listInfo.data;
        const listItems = tmp.map(x =>
            <a key={ x.key.toString() } href={ x.href }>
                { x.title }
            </a>
        );
        if(this.props.listInfo.display) {
            return (
                <div className="dropdown">
                    { listItems }
                </div>
            );
        } else {
            return null;
        }
    }
}

class ContentsContainer extends React.Component {
    render() {
        let listItem;
        if(this.props.content.data && Array.isArray(this.props.content.data)) {
            listItem = this.props.content.data.map ( x =>
                <ImgA input={ x } tag={ this.props.content.tag } key={ x.key }/>
            )
        } else {
            listItem = null;
        }
        if(listItem !== null) {
            return (
                <div className="new-contents-v">
                    { listItem }
                </div>
            )
        } else {
            return null;
        }
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className={ this.props.className }>
                <div className= { this.props.content.tag }>
                    <p className={ this.props.content.tag + "-name"}> { this.props.content.name } </p>
                    <p className={ this.props.content.tag + "-description"}> { this.props.content.description } </p>
                </div>
            </div>
        );
    }
}

class MainContent extends React.Component{
    render() {
        return (
            <div className="news-containers">
                <p> { this.props.content.name }</p>
                <ContentsContainer content={ this.props.content } />
            </div>
        );
    }
}

class MainContents extends React.Component {
    render() {
        let listItem;
        if(this.props.contents && Array.isArray(this.props.contents)) {
            listItem = this.props.contents.map( x =>
                <MainContent content={ x } key={ x.key }/>
            )
        } else {
            listItem = null;
        }
        if(listItem !== null) {
            return (
                <div className="main-contents">
                    { listItem }
                </div>
            )
        } else {
            return null;
        }
    }
}

export {ImgA, DropdownMenu, Title, MainContents};