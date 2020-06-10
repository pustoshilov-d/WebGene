import React, {Component} from 'react';
import icon from "../../images/Buttons/EmailButton.png";
import iconActive from "../../images/Buttons/Email-Active.png";

class EmailBtn extends Component {

    render() {
        return (
            <div >
                <a href={"mailto:" + this.props.email +"?subject=\"Your Model on WebGene\""}>
                    <img
                        className={"image-button"}
                        src={icon}
                        alt={"Email button"}
                        onMouseOver={e => (e.currentTarget.src =  iconActive)}
                        onMouseOut={e => (e.currentTarget.src = icon)}
                    />
                </a>
            </div>
        );
    }
}

export default EmailBtn;