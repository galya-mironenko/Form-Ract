import React, { useState } from 'react';
import{  Form, Input, Select } from "antd";
const { Option } = Select;

const PriceInput = ({ value = {}, onChange }) => {
  const [number, setNumber] = useState();
  const [currency, setCurrency] = useState('uah');

  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };

  const onNumberChange = (e) => {
    const newNumber = parseInt(e.target.value || '', 10);

    if (Number.isNaN(number)) {
      return;
    }

    if (!('number' in value)) {
      setNumber(newNumber);
    }

    triggerChange({
      number: newNumber,
    });
  };

  const onCurrencyChange = (newCurrency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };

  return (
    <div className="currency-filter">
      <Input
        type="text"
        placeholder="from"
        value={value.number || number}
        onChange={onNumberChange}
        className="general-style-input"
      />
      <div> 
        <Select
          value={value.currency || currency}
          className="general-style-select"
          onChange={onCurrencyChange}
        >
          <Option value="rmb">UAH</Option>
          <Option value="dollar">UAH</Option>
        </Select>
        <Input
          type="text"
          placeholder="to"
          value={value.number || number}
          onChange={onNumberChange}
          className="general-style-input"
        />
      </div>
    </div>
  );
};

const TotalFilter = () => {
  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };

  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Price must be greater than zero!'));
  };

  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'uah',
        },
      }}
    > 
      <Form.Item
        name="price"
        label="Total"
        rules={[
          {
            validator: checkPrice,
          },
        ]}
      >
        <PriceInput />
      </Form.Item>
    </Form>
  );
};

export default TotalFilter;
