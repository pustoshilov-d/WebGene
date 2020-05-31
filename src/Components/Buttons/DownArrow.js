import React, {Component} from 'react';
import downArrow from "../../images/DownArrowButton.png";

class DownArrow extends Component {
    render() {
        return (
            <div className={"div-padding"}>
                <img
                    className={"image-button center-align"}
                    src={downArrow}
                    alt={""}
                />
            </div>
        );
    }
}

export default DownArrow;