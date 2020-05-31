import React, {Component} from 'react';
import icon from "../../images/Buttons/GitButton.png";
import {Link} from "react-router-dom";

class GitBtn extends Component {
    render() {
        return (
            <div>
                <a href={"https://github.com/pustoshilov-d"}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Git button"}
                    />
                </a>
            </div>
        );
    }
}

export default GitBtn;