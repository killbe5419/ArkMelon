import React from "react";
import "../../../sass/modules/icons/calcIcon.scss";

class CalcIcon extends React.Component {
    render() {
        let list = Array(4);
        for(let i=0;i<list.length;i++) {
            list[i] = <div key={i} className={`calc-icon-cube-${i+1}`}> </div>
        }
        return (
            <div className={ this.props.className }>
                <div className={`calc-icon`}>
                    { list }
                </div>
            </div>
        );
    }
}

export default CalcIcon;
