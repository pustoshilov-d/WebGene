import React, {Component} from 'react';
import icon from "../../images/Buttons/EmailButton.png";
import {Link} from "react-router-dom";

class EmailBtn extends Component {
    render() {
        return (
            <div >
                <a href={"mailto:" + this.props.email +"?subject=\"Your Model on WebGene\""}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Email button"}
                    />
                </a>
            </div>
        );
    }
}

export default EmailBtn;