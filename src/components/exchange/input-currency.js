import React from "react";
import {Input, Form} from 'antd';

const InputCurrency = ({label}) => {
    return (
      <Form.Item label={label} className="input-txt-currency">
        <Input/>
      </Form.Item>
    );
};

export default InputCurrency; 