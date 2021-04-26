import React from 'react';
import 'antd/dist/antd.css';
import {DatePicker, Form} from 'antd';

const Calendars = () => {
    const config = {
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please select time!',
          },
        ],
      };
    return (
            <>
             <Form.Item name="date-picker" label="DatePicker" {...config}>
                <DatePicker  format="DD-MM-YYYY" placeholder="dd.mm.yyyy" />
            </Form.Item>

      </>
    );
};

export default Calendars;  