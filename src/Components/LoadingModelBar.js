import React, {Component} from 'react';
import {ProgressBar} from "react-bootstrap";

class LoadingModelBar extends Component {

    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div className={"loading-model-bar-wrapper"}>
                <div className={"loading-model-bar"}>
                    <ProgressBar animated now={this.props.progress} />
                    <p className={"text-color-sub text text-main"}>
                        Results are loading and will be available there in {this.props.calculatedTime} minutes. Update this page after that.
                    </p>
                </div>
            </div>
        );
    }
}

LoadingModelBar.defaultProps = {
    calculatedTime: 999,
    progress: 10
}

export default LoadingModelBar;

