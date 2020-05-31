import React, {Component} from 'react';
import {Button, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

class ManualBtn extends Component {
    render() {
        return (
            <div>
                <Link to={"/user-manual"}>
                    <Button variant={"flat"} className={"text-small-bold"}>User manual</Button>
                </Link>
            </div>
        );
    }
}

export default ManualBtn;