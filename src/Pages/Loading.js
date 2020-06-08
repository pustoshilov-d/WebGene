import React, {Component} from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import UploadBtn from "../Components/Buttons/UploadBtn";
import {withRouter} from 'react-router-dom';
const axios = require('axios').default;


class Loading extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data_label:null,
            data_description:null,
            author_name:null,
            author_email:null,
            data_file:null,
            terms_acceptation: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.upload = this.upload.bind(this)
    };


    handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        console.log(event)
        console.log(form.elements)

        await this.setState({
            data_label:form.elements["validationLabel"].value,
            data_description:form.elements["validationDescription"].value,
            author_name:form.elements["validationUsername"].value,
            author_email:form.elements["validationEmail"].value,
            data_file:form.elements["formcheck-api-regular"].files[0],
        })
        form.elements["validationTerms"].value === "on" ?
            await this.setState({terms_acceptation: true}) :
            await this.setState({terms_acceptation: false})
        
        console.log(this.state);
        let result = await this.upload()
        console.log(result)
        // this.props.history.push("/models/"+result.data.id.toString())
    }

    upload = async (id) => {
        const link = "https://europe-west3-webgene.cloudfunctions.net/postUserData"
        return axios({
            url: link,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(this.state)
        });
    }

    render() {
        return (
            <div className={"bg-sub"}>
                <Container className={"container-padding-top container-padding-bottom"}>
                    <Form
                          validated={this.state.validated}
                          onSubmit={this.handleSubmit}
                          className={"text-color-sub"}
                    >
                        <Row>
                            <Col sm={5}>
                                <Form.Group id={"labelField"} controlId="validationLabel">
                                    <Form.Label className={"text-small-bold"}>Label of data</Form.Label>
                                    <Form.Control
                                        // required
                                        type="text"
                                    />
                                    <Form.Text>Less than 10 characters</Form.Text>
                                </Form.Group>

                                <Form.Group  controlId="validationDescription">
                                    <Form.Label className={"text-small-bold"}>Describe your data</Form.Label>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={"3"}
                                        // required
                                        type="text"
                                    />
                                    <Form.Text>Less than 200 characters</Form.Text>
                                </Form.Group>

                                <Form.Group controlId="validationTerms">
                                    <Form.Check
                                        // required
                                        label="Agree to terms and conditions"
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={2}/>

                            <Col sm={5}>

                                    <Form.Group controlId="validationUsername">
                                        <Form.Label className={"text-small-bold"}>Username</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="text"
                                                aria-describedby="inputGroupPrepend"
                                                // required
                                            />
                                        </InputGroup>
                                        <Form.Text>One word, less than 10 characters</Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId={"validationEmail"}>
                                        <Form.Label className={"text-small-bold"}>Email address</Form.Label>
                                        <Form.Control
                                            type={"email"}
                                            // required
                                        />
                                        <Form.Text>
                                            Email is the main way for people to communicate with you about your data
                                        </Form.Text>
                                    </Form.Group>


                                    <Form.Group controlId="validationFile">
                                        <Form.File  id="formcheck-api-regular">
                                            <Form.File.Input
                                                // required
                                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                            />
                                        </Form.File>
                                        <Form.Text>
                                            Only .csv, .xlsx, .csv is supported
                                        </Form.Text>
                                    </Form.Group>
                            </Col>
                        </Row>

                        <div>
                            <Button type={"submit"} className={"upload-button-wrapper center-align"}>
                                <UploadBtn/>
                            </Button>
                        </div>

                    </Form>
                </Container>

                <div style={{height:"30vh"}} className={"bg-loading"}/>
            </div>
        );
    }
}

export default withRouter(Loading);