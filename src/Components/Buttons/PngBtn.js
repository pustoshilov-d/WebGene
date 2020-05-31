import React, {Component} from 'react';
import icon from "../../images/Buttons/PngButton.png";

class PngBtn extends Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"PNG download button"}
                    />
                </a>
            </div>
        );
    }
}

export default PngBtn;