import React, {Component} from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import UploadBtn from "../Components/Buttons/UploadBtn";
import {withRouter} from 'react-router-dom'


class Loading extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataLabel:null,
            dataDescription:null,
            authorName:null,
            authorEmail:null,
            dataFile:null,
            termsAgreement: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.upload = this.upload.bind(this)
    };


    handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        console.log(event)
        console.log(form.elements)

        this.setState({
            dataLabel:form.elements["validationLabel"].value,
            dataDescription:form.elements["validationDescription"].value,
            authorName:form.elements["validationUsername"].value,
            authorEmail:form.elements["validationEmail"].value,
            dataFile:form.elements["formcheck-api-regular"].files[0],
            termsAgreement: form.elements["validationTerms"].value,
        },  () =>{
            console.log(this.state);

            // this.upload()
            this.setState({
                newModelId: 10
            }, () =>{
                this.props.history.push("/models/"+this.state.newModelId)
            })



        })

    };

    upload = () => {
        //with success return newModelId
        this.setState({
            newModelId: 10
        })
        fetch('http://www.example.net', { // Your POST endpoint
            method: 'POST',
            headers: {
                // Content-Type may need to be completely **omitted**
                // or you may need something
                "Content-Type": "You will perhaps need to define a content-type here"
            },
            body: this.state // This is your file object
        }).then(
            response => response.json() // if the response is a JSON object
        ).then(
            success => console.log(success) // Handle the success response object
        ).catch(
            error => console.log(error) // Handle the error response object
        );
    };

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