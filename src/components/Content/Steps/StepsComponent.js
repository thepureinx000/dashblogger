import React, { Component } from 'react';

import { Col, Button, message, Steps } from 'antd';

const steps = [{
    title: 'First',
    content: 'First step to make your life easier.',
  }, {
    title: 'Second',
    content: 'Second step to make your life happiness.',
  }, {
    title: 'Last',
    content: 'Just live.',
  }];

export default class StepsCopmonent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

    render() {
        const { current } = this.state;
        const Step = Steps.Step;              

        return(
            <Col span={8}>
                <div className="blog-steps">
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[this.state.current].content}</div>
                <div className="steps-action">
                    {
                    this.state.current < steps.length - 1
                    &&
                    <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                    this.state.current === steps.length - 1
                    &&
                    <Button type="primary" onClick={() => message.success('Your life is started here!')}>Got it!</Button>
                    }
                    {
                    this.state.current > 0
                    &&
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                        Previous
                    </Button>
                    }
                </div>
                </div>
            </Col>
        );
    }
}