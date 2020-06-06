import React, {Component} from 'react';
import icon from "../../images/Buttons/HomeButton.png";
import {Link} from "react-router-dom";
import iconActive from "../../images/Buttons/Home-Active.png";

class HomeBtn extends Component {
    render() {
        return (
            <div>
                <Link to={"/"}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Home button"}
                        onMouseOver={e => (e.currentTarget.src =  iconActive)}
                        onMouseOut={e => (e.currentTarget.src = icon)}
                    />
                </Link>
            </div>
        );
    }
}

export default HomeBtn;