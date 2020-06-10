import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Col, Container, Row} from "react-bootstrap";
import mineImage from "../images/Mine.png";
import dnaImage from "../images/RNA3.png";
import EmailBtn from "../Components/Buttons/EmailBtn";
import GitBtn from "../Components/Buttons/GitBtn";
import GoBtn from "../Components/Buttons/GoBtn";

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isHoverLeft: false,
            isHoverRight: false,
            timeout: 3000,
        }
    }

    render() {
        return (
            <div className={"bg-accent home-block-mine"} >
                <Container fluid>
                    <Row style={{paddingTop:"35px"}}/>
                    <Row>
                        <>

                            <Col sm={4} className={"bg-main"}
                                 // onMouseOver={() => {this.setState({
                                 //     isHoverLeft:true}, () => {console.log(this.state)})}}
                                 // onMouseOut={() => {this.setState({
                                 //     isHoverLeft:false}, () => {console.log(this.state)})}}
                            >
                                <Container fluid>
                                    <Row className={"text-header"}  style={{paddingTop:"92px"}}>
                                        <Col sm={1}/>
                                        <Col sm={11} className={"bg-main text-color-main"}>
                                            <p>
                                                Dmitry<br/>Pustoshilov
                                            </p>
                                        </Col>
                                    </Row>

                                    <TransitionGroup>

                                        <Row className={"text-main bg-main "} style={{paddingTop:"30px"}}>
                                            <Col sm={1}/>
                                            <Col sm={11} className={"text-color-main"}>

                                                    {/*{this.state.isHoverLeft &&*/}
                                                    {/*<CSSTransition timeout={this.state.timeout} classNames="opacity">*/}
                                                        <p className={""}>
                                                            Data and Life Scientist
                                                            <br/>Fullstack Developer
                                                            <br/>UI/UX Designer
                                                        </p>
                                            </Col>
                                        </Row>



                                            <Row className={"bg-main"} style={{paddingTop:"30px"}}>
                                                <Col sm={1}/>
                                                <Col sm={3}>
                                                    {/*{this.state.isHoverLeft &&*/}
                                                    {/*<CSSTransition timeout={this.state.timeout} classNames="opacity">*/}
                                                        <EmailBtn email={"pustoshilov.d@gmail.com"}/>
                                                </Col>

                                                <Col sm={8} className={"bg-main"}>
                                                    {/*{this.state.isHoverLeft &&*/}
                                                    {/*<CSSTransition timeout={this.state.timeout} classNames="opacity">*/}
                                                            <GitBtn/>
                                                </Col>
                                            </Row>
                                    </TransitionGroup>
                                 </Container>
                            </Col>
                            <Col sm={2} className={"block-border"}>
                                        <img
                                            className={"home-block-image-mine"}
                                            src={mineImage}
                                            alt={"Mine photo"}
                                            style={{filter: "drop-shadow(40px 0px 10px #000000)"}}
                                        />

                            </Col>
                        </>

                        <>
                            <Col sm={2} className={"block-border"}>
                                <CSSTransition in={this.state.inPropRight} timeout={this.state.timeout} classNames="shadow">
                                    <img
                                        className={"home-block-image-dna"}
                                        src={dnaImage}
                                        alt={"Mine photo"}
                                        style={{filter: "drop-shadow(-40px 0px 5px #000000)"}}
                                    />
                                </CSSTransition>
                            </Col>
                            <Col sm={4} className={"bg-main"}>
                                <Container fluid>
                                    <Row className={"text-header"} style={{paddingTop:"92px"}}>
                                        <Col sm={3}/>
                                        <Col sm={9} className={"bg-main text-color-main"}>
                                            <p>
                                                Gene<br/>co-expression
                                            </p>
                                        </Col>

                                    </Row>

                                    <Row className={"text-main"} style={{paddingTop:"30px"}}>
                                        <Col sm={3}/>
                                        <Col sm={8} className={"bg-main text-color-main"}>
                                            <CSSTransition in={this.state.inPropRight} timeout={this.state.timeout} classNames="opacity">
                                                <p>
                                                    Generating correlation maps on your own data with Random Forest algorithm
                                                </p>
                                            </CSSTransition>
                                        </Col>
                                        <Col sm={1}/>
                                    </Row>

                                    <Row style={{paddingTop:"30px"}}>
                                        <Col sm={6}/>

                                        <Col sm={6} className={"bg-main"}>
                                            <CSSTransition in={this.state.inPropRight} timeout={this.state.timeout} classNames="opacity">
                                                <GoBtn/>
                                            </CSSTransition>
                                        </Col>
                                    </Row>
               y                 </Container>
                            </Col>
                        </>

                    </Row>
                </Container>


            </div>
        );
    }
}

export default Home;