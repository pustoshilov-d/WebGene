import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AddDataBtn from "./Buttons/AddDataBtn";
import DataBtn from "./Buttons/DataBtn";
import {Link} from "react-router-dom";

class ModelsCarousel extends Component {


    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <AddDataBtn/>
                        </Col>

                        {this.props.info.map((data,i) =>
                            <Col sm={2}>
                                <Link to={"/models/"+data.id} className={"link-without-underline"}>
                                    <DataBtn label={data.label} author={data.author}/>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ModelsCarousel;