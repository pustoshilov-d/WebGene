import React, {Component} from 'react';
import icon from "../../images/Buttons/GitButton.png";
import {Link} from "react-router-dom";
import iconActive from "../../images/Buttons/Git-Active.png";

class GitBtn extends Component {
    render() {
        return (
            <div>
                <a href={"https://github.com/pustoshilov-d"}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Git button"}
                        onMouseOver={e => (e.currentTarget.src =  iconActive)}
                        onMouseOut={e => (e.currentTarget.src = icon)}
                    />
                </a>
            </div>
        );
    }
}

export default GitBtn;