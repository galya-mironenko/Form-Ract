import React from 'react';
import 'antd/dist/antd.css';
import { Form } from 'antd';

const PlainTxt = (props) => {
    const {plainTxt, label} = props;
    return (
        <Form.Item label= {label} required="true">
            <span className="ant-form-text">{plainTxt}</span>
        </Form.Item>
    );
};

export default PlainTxt;  