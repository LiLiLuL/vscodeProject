import React, { Component } from 'react';
import { observer, inject } from "mobx-react";

import { Button } from 'antd';
@inject('companyStore')
@observer
class companyInfo extends Component {
    constructor(props) {
        super(props);
        this.companyStore = this.props.companyStore;
    }

    render() {

        return (
            <div>
               111
            </div>

        )
    }
}
export default companyInfo;