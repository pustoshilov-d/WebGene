import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Plot from "../Components/Plot";
import plotImage from "../images/PlotSample.png"
import TableSample from "../Components/TableSample";
import ModelsCarousel from "../Components/ModelsCarousel";
import SvgBtn from "../Components/Buttons/SvgBtn";
import PngBtn from "../Components/Buttons/PngBtn";
import EmailBtn from "../Components/Buttons/EmailBtn";
import DownArrow from "../Components/Buttons/DownArrow";
import LoadingModelBar from "../Components/LoadingModelBar";


class AddedModel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataProcessed:null,

            dataId: this.props.match.params.id,
            dataLabel: null,
            authorName: null,
            authorEmail: null,
            dataDescription: null,
            image: null,

            tableData: {
                r0: {c0: null, c1: null, c2: null, c3: null},
                r1: {c0: null, c1: null, c2: null, c3: null},
                r2: {c0: null, c1: null, c2: null, c3: null},
                r3: {c0: null, c1: null, c2: null, c3: null}},

            svgLink: null,
            pngLink: null,

            modelsInfo: [
                {id: null, label: null, author: null, link:"/"}],
        }

        this.getDataForCarousel = this.getDataForCarousel.bind(this)
        this.getCurrentPageData = this.getCurrentPageData.bind(this)
    };

    componentDidMount =  () => {
        this.getCurrentPageData(this.state.dataId);
        this.getDataForCarousel(this.state.dataId);

    }

    getDataForCarousel = (currentDataId) => {
        this.setState({
            modelsInfo: [
                {id: "main", label: "Human RNA", author: "Pustoshilov"},
                {id: 1, label: "RNA sequence", author: "Vasily"},
                {id: 2, label: "E-coli RNA", author: "Dimitry"},
                {id: 3, label: "E-coli DNA", author: "Kristy"},
                {id: 4, label: "Human DNA", author: "Victor"}]
        })

        return null
    }

    getCurrentPageData = (currentDataId) => {


        this.setState( {

            dataLabel: "Something",
            authorName: "Pustoshilov",
            authorEmail: "pustoshilov.d@gmail.com",
            dataDescription: "Even if we, when we were just born, lived already one in the river Upe," +
                " under the dam, and the other in Gavlovitsy - you know, there, near the wooden bridge.",

            image: plotImage,

            calculatedTime: 20,
            progress: 30,

            tableData: {
                r0: {c0: "#", c1: "First Name", c2: "Last Name", c3: "Username"},
                r1: {c0: "1", c1: "Mark", c2: "Thornton", c3: "@mdo"},
                r2: {c0: "2", c1: "Jacob", c2: "Otto", c3: "@fat"},
                r3: {c0: "3", c1: "Larry", c2: "the Bird", c3: "@twitter"},
            },
            svgLink: "http://htmlbook.ru/themes/hb/img/logo.png",
            pngLink: "http://htmlbook.ru/themes/hb/img/logo.png",
        })

        currentDataId === "10"
            ? this.setState({dataProcessed:false})
            : this.setState({dataProcessed:true})


        return null
    }



    render() {
        console.log(this.state)

        return (
            <div className={"bg-sub"}>
                <h1>{this.state.dataId}</h1>
                <Container fluid className={"container-padding-top"}>
                    <Row>
                        <Col sm={6} className={"text-color-sub"}>
                            <p className={"text-header"}>
                                {this.state.dataLabel}
                            </p>
                            <p className={"text-main text-color-sub"}>
                                <b>Author name:</b> {this.state.authorName}
                            </p>
                            <p className={"text-main text-color-sub"}>
                                <b>Author email:</b> {this.state.authorEmail}
                            </p>

                            <p className={"text-main text-color-sub"}>
                                <b>Description:</b>
                                <br/>{this.state.dataDescription}
                            </p>

                            <TableSample data={this.state.tableData}/>
                        </Col>

                        <Col sm={1}/>
                        <Col sm={5}>
                            {this.state.dataProcessed
                                ? <Plot source={this.state.image}/>
                                : <LoadingModelBar calculatedTime={this.state.calculatedTime} progress={this.state.progress}/>
                            }

                        </Col>
                    </Row>

                    <Row>
                        <Col sm={8}/>
                        <Col sm={1}>
                            <SvgBtn link={this.state.svgLink}/>
                        </Col>
                        <Col sm={1}>
                            <PngBtn link={this.state.pngLink}/>
                        </Col>

                        <Col sm={1}>
                            <EmailBtn email={this.state.authorEmail}/>
                        </Col>
                    </Row>
                </Container>


                <div style={{height:"500px"}} className={"bg-models"}>
                    <DownArrow/>
                    <ModelsCarousel info={this.state.modelsInfo}/>
                </div>

            </div>
        );
    }
}

export default AddedModel;