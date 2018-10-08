import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import { Button } from 'antd';
@inject('documentStore')
@observer
class document extends Component {
    constructor(props) {
        super(props);
        this.documentStore = this.props.documentStore;
    }
    render() {
        return (
        <div>
            <div>{this.documentStore.number}</div>
            <Button onClick={() => { this.documentStore.setNumber() }}>增加</Button>
        </div>
        )
    }
}
export default document;