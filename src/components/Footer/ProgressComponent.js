import React from 'react';

import { Col, Tag, Progress } from 'antd';

const ProgressComponent = () => {
    return (
        <Col span={8}>
            <div className="blog-progress-bar">
                <Progress type="circle" percent={17} />
            </div>
                <div className="blog-tags">
                    <h4 style={{ margin: '16px 0' }}>Tags:</h4>
                    <Tag color="red">mern</Tag>
                    <Tag color="pink">react</Tag>
                    <Tag color="orange">node</Tag>
                    <Tag color="green">mongo</Tag>
                </div>
        </Col>
    );
}

export default ProgressComponent;
