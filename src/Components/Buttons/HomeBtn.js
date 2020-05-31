import React, {Component} from 'react';
import icon from "../../images/Buttons/HomeButton.png";
import {Link} from "react-router-dom";

class HomeBtn extends Component {
    render() {
        return (
            <div>
                <Link to={"/"}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Home button"}
                    />
                </Link>
            </div>
        );
    }
}

export default HomeBtn;