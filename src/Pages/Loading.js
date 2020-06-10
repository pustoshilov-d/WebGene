import React, {Component} from 'react';
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import UploadBtn from "../Components/Buttons/UploadBtn";
import {withRouter} from 'react-router-dom';

const axios = require('axios').default;


class Loading extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data_label:'',
            data_description:'',
            author_name:'',
            author_email:'',
            data_file:null,
            terms_acceptation: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.upload = this.upload.bind(this)
    };


    handleSubmit = async (event) => {
        // event.persist();
        const form = event.currentTarget;
        event.preventDefault();

        console.log(event)
        console.log(form.elements)

        await this.setState({
            data_label:form.elements["data_label"].value,
            data_description:form.elements["data_description"].value,
            author_name:form.elements["author_name"].value,
            author_email:form.elements["author_email"].value,
            data_file:form.elements["data_file"].files[0],
            data_file_type:form.elements["data_file"].files[0].type,
            data_file_name:form.elements["data_file"].files[0].name,
            terms_acceptation: form.elements["terms_acceptation"].checked
        })

        
        const formData = new FormData();
        formData.append('data_label',form.elements["data_label"].value);
        formData.append('data_description',form.elements["data_description"].value);
        formData.append('author_name',form.elements["author_name"].value);
        formData.append('author_email',form.elements["author_email"].value);
        formData.append('data_file',form.elements["data_file"].files[0]);
        formData.append('data_file_type',form.elements["data_file"].files[0].type);
        formData.append('data_file_name',form.elements["data_file"].files[0].name);
        formData.append('terms_acceptation', form.elements["terms_acceptation"].checked);
        
        // formData.append("info", this.state);
        console.log(...formData);


        let result = await this.upload(formData)
        console.log(result)
        this.props.history.push("/models/"+result.toString())
    }

    upload = async (formData) => {
        const link = "https://europe-west3-webgene.cloudfunctions.net/postUserData"
        let result = await axios({
            url: link,
            method: 'post',
            data: formData
        });
        return result.data
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
                                <Form.Group id={""} controlId="data_label">
                                    <Form.Label className={"text-small-bold"}>Label of data</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                    />
                                    <Form.Text>Less than 10 characters</Form.Text>
                                </Form.Group>

                                <Form.Group  controlId="data_description">
                                    <Form.Label className={"text-small-bold"}>Describe your data</Form.Label>
                                    <Form.Control
                                        as={"textarea"}
                                        rows={"3"}
                                        required
                                        type="text"
                                    />
                                    <Form.Text>Less than 200 characters</Form.Text>
                                </Form.Group>

                                <Form.Group controlId="terms_acceptation">
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={2}/>

                            <Col sm={5}>

                                    <Form.Group controlId="author_name">
                                        <Form.Label className={"text-small-bold"}>Username</Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="text"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </InputGroup>
                                        <Form.Text>One word, less than 10 characters</Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId={"author_email"}>
                                        <Form.Label className={"text-small-bold"}>Email address</Form.Label>
                                        <Form.Control
                                            type={"email"}
                                            required
                                        />
                                        <Form.Text>
                                            Email is the main way for people to communicate with you about your data
                                        </Form.Text>
                                    </Form.Group>


                                    <Form.Group controlId="file_form">
                                        <Form.File  id="data_file">
                                            <Form.File.Input
                                                required
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