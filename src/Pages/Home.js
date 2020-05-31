import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import mineImage from "../images/Mine.png";
import dnaImage from "../images/RNA3.png";
import EmailBtn from "../Components/Buttons/EmailBtn";
import GitBtn from "../Components/Buttons/GitBtn";
import GoBtn from "../Components/Buttons/GoBtn";

class Home extends Component {
    render() {
        return (
            <div className={"bg-accent home-block-mine"} >
                <Container fluid>
                    <Row><p>Row</p></Row>
                    <Row>
                        <Col sm={4} className={"bg-main"}>
                            <Container fluid>
                                <Row className={"text-header"}>
                                    <Col sm={12} className={"bg-main text-color-main"}>
                                        <p>
                                            Dmitry<br/>Pustoshilov
                                        </p>
                                    </Col>

                                </Row>

                                <Row className={"text-main"}>
                                    <Col sm={12} className={"bg-main text-color-main"}>
                                        <p>
                                            Data and Life Scientist
                                            <br/>Fullstack Developer
                                            <br/>UI/UX Designer
                                        </p>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={3} className={"bg-main"}>
                                        <EmailBtn email={"pustoshilov.d@gmail.com"}/>
                                    </Col>

                                    <Col sm={9} className={"bg-main"}>
                                        <GitBtn/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={4}>
                                    </Col>
                                    <Col sm={2}>

                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col sm={2} className={"block-border"}>
                            <img
                                className={"home-block-image-mine"}
                                src={mineImage}
                                alt={"Mine photo"}
                            />
                        </Col>

                        <Col sm={2} className={"block-border"}>
                            <img
                                className={"home-block-image-dna"}
                                src={dnaImage}
                                alt={"Mine photo"}
                            />
                        </Col>
                        <Col sm={4} className={"bg-main"}>
                            <Container fluid>
                                <Row className={"text-header"}>
                                    <Col sm={3}/>
                                    <Col sm={9} className={"bg-main text-color-main"}>
                                        <p>
                                            Gene<br/>co-expression
                                        </p>
                                    </Col>

                                </Row>

                                <Row className={"text-main"}>
                                    <Col sm={3}/>
                                    <Col sm={8} className={"bg-main text-color-main"}>
                                        <p>
                                            Generating correlation maps on your own data with Random Forest algorithm
                                        </p>
                                    </Col>
                                    <Col sm={1}/>
                                </Row>

                                <Row>
                                    <Col sm={6}/>

                                    <Col sm={6} className={"bg-main"}>
                                        <GoBtn/>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={4}>
                                    </Col>
                                    <Col sm={2}>

                                    </Col>
                                </Row>
                            </Container>
                        </Col>

                    </Row>
                </Container>


            </div>
        );
    }
}

export default Home;