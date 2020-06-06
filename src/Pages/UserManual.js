import React, {Component} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class UserManual extends Component {
    render() {
        return (
            <div style={{height:"1000px"}} className={"bg-sub"}>
                <Container className={"text-color-sub"}>
                    <Row>
                        <h1 style={{padding:"24px 0 24px"}} className={"center-align"}>How to use service</h1>
                    </Row>
                    <Row>
                        <p className={" text-small"}>Welcome to WebGene User Manual!
                            This service allows you to get high-quality visualization of the correlation of your gene expression data using the Random Forest machine learning algorithm. You can also view the results of processing data of other users and contact them.
                            <br/><br/>The service is recommended to run in Google Chrome on a personal computer.
                            <br/>To get started on the main page, go to "Gene co-expression". Here you see the results of training for the developer of the service. Below you can view information cards of other users.
                            <br/><br/>There you can go to the page for adding your own data. Fill in the information and upload your dataset. Attention: datasets are accepted in .xls, .xlsx and .csv formats. Column Content: CodeClass, Name, Accession, Count. An example can be found on the site. After a successful download, you will be taken to the results waiting page. It can be closed and returned at any time after the calculated processing time.
                            <br/>For any questions, errors and suggestions, you can contact the developer of the service, whose contacts are given on the main page. There is also a link to the git repository of the service.
                            <br/><br/>Wish you productive work!
                        </p>
                    </Row>
                    <Row style={{padding:"24px 0 24px"}}>
                        <Link className={"center-align"} to={"/"}>
                            <Button variant={"flat"} className={"text-small-bold center-align"}>Got it!</Button>
                        </Link>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default UserManual;