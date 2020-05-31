import React, {Component} from 'react';
import imageButton from "../../images/Buttons/AddButton.png"
import {Link} from "react-router-dom";


class AddDataBtn extends Component {
    render() {
        return (
            <div>
                <Link to={"/loading"}>
                    <div className={"bg-main data-button text-small-bold text-color-sub"}>
                        <img
                            className={"image-button-small align-vert-middle"}
                            src={imageButton}
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