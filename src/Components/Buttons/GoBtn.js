import React, {Component} from 'react';
import icon from "../../images/Buttons/GoButton.png";
import {Link} from "react-router-dom";

class GoBtn extends Component {
    render() {
        return (
            <div>
                <Link to={"/models/main"}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Go button"}
                    />
                </Link>
            </div>
        );
    }
}

export default GoBtn;