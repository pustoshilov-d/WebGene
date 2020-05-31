import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Logo from "./Logo";
import HomeBtn from "./Buttons/HomeBtn";

class SubHeader extends Component {
    render() {
        return (
                <Container fluid>
                    <Row>
                        <Col sm={1}>
                            <HomeBtn />
                        </Col>
                        <Col>
                            <Logo/>
                        </Col>
                        <Col sm={1}/>
                    </Row>
                </Container>
        );
    }
}

export default SubHeader;