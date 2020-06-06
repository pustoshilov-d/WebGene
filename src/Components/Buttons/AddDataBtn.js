import React, {Component} from 'react';
import icon from "../../images/Buttons/AddButton.png"
import {Link} from "react-router-dom";
import iconActive from "../../images/Buttons/Add-Active.png";


class AddDataBtn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            curIcon: icon
        }
    }

    render() {
        return (
            <div>
                <Link to={"/loading"} className={"link-without-underline"}>
                    <div className={"bg-main data-button text-small-bold text-color-sub"}
                         onMouseOver={() => {this.setState({
                             curIcon:iconActive})}}
                         onMouseOut={() => {this.setState({
                             curIcon:icon})}}
                    >
                        <img
                            id={"add-data-btn"}
                            className={"image-button-small align-vert-middle"}
                            src={this.state.curIcon}
                            alt={"Add new data"}
                        />
                        <p>
                            Add new data
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default AddDataBtn;