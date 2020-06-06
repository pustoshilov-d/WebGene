import React, {Component} from 'react';
import icon from "../../images/Buttons/PngButton.png";
import iconActive from "../../images/Buttons/Png-Active.png";

class PngBtn extends Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"PNG download button"}
                        onMouseOver={e => (e.currentTarget.src =  iconActive)}
                        onMouseOut={e => (e.currentTarget.src = icon)}
                    />
                </a>
            </div>
        );
    }
}

export default PngBtn;