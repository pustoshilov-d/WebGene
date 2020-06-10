import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Button} from "react-bootstrap";

class Testing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            message: "meassds"
        }
    }

    render() {

        return (
            <div>
                <Button onClick={() =>{this.setState({isOpen:true})}}>open</Button>
                <TransitionGroup>
                    {this.state.isOpen && (
                        <CSSTransition classNames="dialog" timeout={300} onClick={() =>{this.setState({isOpen:false})}}>
                            <div className="dialog--overlay">
                                <div className="dialog">{this.state.message}</div>
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>

        );
    }
}
export default Testing;
