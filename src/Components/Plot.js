import React, {Component} from 'react';

class Plot extends Component {
    render() {
        return (
            <div>
                <img
                    className={"plot-image"}
                    src={this.props.source}
                    alt={"Plot image"}
                />
            </div>
        );
    }
}

export default Plot;