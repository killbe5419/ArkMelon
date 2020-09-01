import React from "react";
import "../../../sass/modules/icons/loadingIcon.scss";

class LoadingIcon extends React.Component {
    render() {
        let list = Array(6);
        for(let i=0;i<list.length;i++) {
            list[i] = <div key={i} className={`loading-icon-cube-${i+1}`}> </div>
        }
        return (
            <div className={ this.props.className }>
                <div className={`loading-icon`}>
                    { list }
                </div>
            </div>
        );
    }
}

export default LoadingIcon;
