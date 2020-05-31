import React, {Component} from 'react';
import icon from "../../images/Buttons/UploadButton.png";

class UploadBtn extends Component {
    render() {
        return (
            <>
                <img
                        className={"upload-button"}
                        src={icon}
                        alt={"Upload button"}
                    />
                </>
        );
    }
}

export default UploadBtn;