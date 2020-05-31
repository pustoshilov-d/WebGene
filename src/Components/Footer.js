import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ManualBtn from "./Buttons/ManualBtn";

class Footer extends Component {
    render() {
        return (
            // <div className="footer align-vert-middle">
            <div className="fixed-bottom footer align-vert-middle">
                    <Container fluid>
                            <Row>
                                <Col sm={10} className={"text-color-sub text-small footer-text"}>
                                    <p>
                                        For correct operation, we recommend using Google Chrome
                                        <br/>© 2020 Pustoshilov
                                    </p>
                                </Col>

                                <Col sm={2} className={""}>
                                    <ManualBtn/>
                                </Col>
                            </Row>
                    </Container>
            </div>
        );
    }
}

export default Footer;