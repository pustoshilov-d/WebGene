import React, {Component} from 'react';

class DataBtn extends Component {

    render() {
        return (
            <div>
                <div className={"bg-main data-button text-small-bold text-color-sub"}>
                    <p>
                        {this.props.label}
                    </p>
                    <p>
                        @{this.props.author}
                    </p>
                </div>
            </div>
        );
    }
}

export default DataBtn;