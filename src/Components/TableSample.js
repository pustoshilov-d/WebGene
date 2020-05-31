import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class TableSample extends Component {
    render() {
        return (
            <div>
                <Table responsive className={"text-color-sub text-table"}>
                    <thead className={"text-table-bold"}>
                    <tr>
                        <th>{this.props.data.r0.c0}</th>
                        <th>{this.props.data.r0.c1}</th>
                        <th>{this.props.data.r0.c2}</th>
                        <th>{this.props.data.r0.c3}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>{this.props.data.r1.c0}</th>
                        <th>{this.props.data.r1.c1}</th>
                        <th>{this.props.data.r1.c2}</th>
                        <th>{this.props.data.r1.c3}</th>
                    </tr>
                    <tr>
                        <th>{this.props.data.r2.c0}</th>
                        <th>{this.props.data.r2.c1}</th>
                        <th>{this.props.data.r2.c2}</th>
                        <th>{this.props.data.r2.c3}</th>
                    </tr>
                    <tr>
                        <th>{this.props.data.r3.c0}</th>
                        <th>{this.props.data.r3.c1}</th>
                        <th>{this.props.data.r3.c2}</th>
                        <th>{this.props.data.r3.c3}</th>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableSample;