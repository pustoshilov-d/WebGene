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
const axios = require('axios').default;


class AddedModel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            data_processed:null,


            data_label: null,
            author_name: null,
            author_email: null,
            data_description: null,
            image: null,

            tableData: {
                r0: {c0: null, c1: null, c2: null, c3: null},
                r1: {c0: null, c1: null, c2: null, c3: null},
                r2: {c0: null, c1: null, c2: null, c3: null},
                r3: {c0: null, c1: null, c2: null, c3: null}},

            svgLink: null,
            pngLink: null,

            carouselInfo: [
                {id: null, label: null, author: null, link:"/"}],
        }
        this.getInfoFromServer = this.getInfoFromServer.bind(this)
    };

    componentDidMount =  () => {
        this.getInfoFromServer(this.state.id)
    }

    getInfoFromServer = async (id) => {
        console.log(this.state)
        const link = "https://europe-west3-webgene.cloudfunctions.net/getUserInfo"
        let result = await axios({
            url: link,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({id: id})
        })
        console.log(result)
        result = result.data
        console.log(result)

        await this.setState(result.pageInfo)
        await this.setState({carouselInfo: result.carouselInfo})
        console.log(this.state)

        await this.setState( {
            image: plotImage,
            tableData: {
                r0: {c0: "#", c1: "First Name", c2: "Last Name", c3: "Username"},
                r1: {c0: "1", c1: "Mark", c2: "Thornton", c3: "@mdo"},
                r2: {c0: "2", c1: "Jacob", c2: "Otto", c3: "@fat"},
                r3: {c0: "3", c1: "Larry", c2: "the Bird", c3: "@twitter"},
            },
            svgLink: "http://htmlbook.ru/themes/hb/img/logo.png",
            pngLink: "http://htmlbook.ru/themes/hb/img/logo.png",
        })

        console.log(this.state)
    }



    render() {
        console.log(this.state)

        return (
            <div className={"bg-sub"}>
                {/*<h1>{this.state.id}</h1>*/}
                <Container fluid className={"container-padding-top"}>
                    <Row>
                        <Col sm={6} className={"text-color-sub"}>
                            <p className={"text-header"}>
                                {this.state.data_label}
                            </p>
                            <p className={"text-main text-color-sub"}>
                                <b>Author name:</b> {this.state.author_name}
                            </p>
                            <p className={"text-main text-color-sub"}>
                                <b>Author email:</b> {this.state.author_email}
                            </p>

                            <p className={"text-main text-color-sub"}>
                                <b>Description:</b>
                                <br/>{this.state.data_description}
                            </p>

                            <TableSample data={this.state.tableData}/>
                        </Col>

                        <Col sm={1}/>
                        <Col sm={5}>
                            {this.state.data_processed
                                ? <Plot source={this.state.image}/>
                                : <LoadingModelBar calculated_time={this.state.calculated_time} progress={this.state.progress}/>
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
                            <EmailBtn email={this.state.author_email}/>
                        </Col>
                    </Row>
                </Container>


                <div style={{height:"500px"}} className={"bg-models"}>
                    <DownArrow/>
                    <ModelsCarousel info={this.state.carouselInfo}/>
                </div>

            </div>
        );
    }
}

export default AddedModel;