import React, {Component} from 'react';
import icon from "../../images/Buttons/UploadButton.png";
import iconActive from "../../images/Buttons/Upload-Active.png";

class UploadBtn extends Component {
    render() {
        return (
            <>
                <img
                        className={"upload-button"}
                        src={icon}
                        alt={"Upload button"}
                        onMouseOver={e => (e.currentTarget.src =  iconActive)}
                        onMouseOut={e => (e.currentTarget.src = icon)}
                    />
                </>
        );
    }
}

export default UploadBtn;