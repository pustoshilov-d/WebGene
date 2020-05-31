import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Description extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className={"bg-main"}>
                        <Col>
                            <p className={"text-center text-main text-color-main"}>
                                Bioinformatical service for generating genes co-expression maps based on Machine Learning
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Description;