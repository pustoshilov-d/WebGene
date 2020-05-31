import React, {Component} from 'react';
import logoImage from "../images/Logo.png"
import {Link} from "react-router-dom";

class Logo extends Component {
    render() {
        return (
            <div className={"logo"}>
                <Link to={"/"}>
                    <img
                        className={"logo-image"}
                        src={logoImage}
                        width={64}
                        height={64}
                        alt={"logoImage"}
                    />
                    <h1 className={"logo-text-display text-logo text-color-main"}>WebGene</h1>
                </Link>
            </div>
        );
    }
}

export default Logo;