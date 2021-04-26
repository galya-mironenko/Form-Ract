import React from 'react';
import 'antd/dist/antd.css';
import {Form, Button} from 'antd';

const TotalButton = () => {
    return (
        <div className="form-button">
            <Form.Item >
                <Button type="primary" htmlType="submit" className="form-button-submit">Create</Button>
                <span className="result">Total:<span> 2,100.00 </span>UAH</span>
            </Form.Item>
        </div>
    );
};

export default TotalButton; 