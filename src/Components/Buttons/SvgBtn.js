import React, {Component} from 'react';
import icon from "../../images/Buttons/SvgButton.png";
import iconActive from "../../images/Buttons/Svg-Active.png";

class SvgBtn extends Component {
    render() {
        return (
            <div>
                <a href={this.props.link}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"SVG download button"}
                        onMouseOver={e => (e.currentTarget.src =  iconActive)}
                        onMouseOut={e => (e.currentTarget.src = icon)}
                    />
                </a>
            </div>
        );
    }
}

export default SvgBtn;