import React from 'react';

import { Col, Timeline } from 'antd';

const TimelineComponent = () => {
    return (
        <Col span={8}>
            <div className="blog-timeline">
            <Timeline>
                <Timeline.Item color="green">Create a component architecture</Timeline.Item>
                <Timeline.Item color="red">Implement Routing</Timeline.Item>
                <Timeline.Item color="red">Associate a frontend with a backend</Timeline.Item>
                <Timeline.Item color="red">Add restify/typescript </Timeline.Item>
            </Timeline>
            </div>
        </Col>
    );
}

export default TimelineComponent;