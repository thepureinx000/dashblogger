import React, { Component } from 'react';

import { Layout, Progress, Tag, Row } from 'antd';

import DateComponent from '../components/Footer/DateComponent';
import ProgressComponent from '../components/Footer/ProgressComponent';
import TimelineComponent from '../components/Footer/TimelineComponent';

export default class FooterContainer extends Component {

    render() {  
        const { Footer } = Layout;

        return (
            <Footer>
                <Row>
                    <TimelineComponent />
                    <ProgressComponent />
                    <DateComponent />
                </Row>
            </Footer>
        );
    }
}