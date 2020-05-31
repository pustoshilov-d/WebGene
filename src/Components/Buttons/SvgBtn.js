import React, {Component} from 'react';
import icon from "../../images/Buttons/SvgButton.png";

class SvgBtn extends Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"SVG download button"}
                    />
                </a>
            </div>
        );
    }
}

export default SvgBtn;