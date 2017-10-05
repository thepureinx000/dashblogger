import React from 'react';

import { Col, DatePicker } from 'antd';

function onChange(date, dateString) {
    console.log(date, dateString);
  }

const { MonthPicker } = DatePicker;
const DateComponent = () => {
    return (
        <Col span={8}>
            <div className="blog-date-picker">
                <DatePicker onChange={onChange} />
                <br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br />
            </div>
        </Col>
    );
}
export default DateComponent;
