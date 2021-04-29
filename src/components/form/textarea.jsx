import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input} from 'antd';

const TextAreas = ({placehold}) => {
    return (
        <div className="form-textarea">
            <Form.Item label="Note">
                <Input.TextArea placeholder={placehold} rows="5" />
            </Form.Item>
        </div>
    );
};

export default TextAreas; 