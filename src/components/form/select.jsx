import React from 'react';
import 'antd/dist/antd.css';
import { Select, Form} from 'antd';

const Selects = ({label}) => {
    return (
        <>
        <Form.Item  name="select"
        label={label}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select!',
          },
        ]}>
          <Select placeholder="Please select">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo2">Demo2</Select.Option>
          </Select>
        </Form.Item>
      </>
    );
};

export default Selects;  