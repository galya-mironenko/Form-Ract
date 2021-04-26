import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input} from 'antd';

const TextAreas = ({placehold}) => {
    return (
        <div className="form-textarea">
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea placeholder={placehold}/>
            </Form.Item>
        </div>
    );
};

export default TextAreas; 