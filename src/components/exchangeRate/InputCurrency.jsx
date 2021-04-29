import React from "react";
import {Input, Form} from 'antd';

const InputCurrency = ({label, placeholder}) => {
    return (
      <Form.Item label={label} className="input-txt-currency">
        <Input placeholder={placeholder}/>
      </Form.Item>
    );
};

export default InputCurrency; 