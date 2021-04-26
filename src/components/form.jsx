import React, { useState } from 'react';
import 'antd/dist/antd.css';
import Tags from "./form/tag";
import Calendars from "./form/calendar";
import PlainTxt from "./form/plain-text";
import TextAreas from "./form/textarea";
import TotalButton from "./form/total-button";
import Selects from './form/select';
import { Form, Input } from 'antd';

const FormLayout = () => {
  const [form] = Form.useForm();
  const [formLayout] = useState('vertical');

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

  return (
    <div className="form-style">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        onFinish={onFinish}
        initialValues={{
          layout: formLayout,
        }}>
          <div className="form-row">
            <Calendars/>

            <Form.Item label="Location">
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Form.Item label="Legal Entity">
              <Input placeholder="input placeholder" />
            </Form.Item>

            <Tags/>
          </div >
          <div className="form-row">
            <PlainTxt  label="Supplier" plainTxt="Amazon" required="true"/>
            <PlainTxt  label="Currency" plainTxt="USD" required="true"/>
            <PlainTxt  label="Terms of Payment" plainTxt="Prepayment" className="no-required" />
            <PlainTxt  label="Contract" plainTxt="# 20304 – Precoro Inc." className="no-required"/>
          </div>
          <div className="form-row">
            <Selects label="Department"/>
            <Selects label="Payment method"/>
            <Selects label="Cost center"/>
            <Selects label="Project"/>
          </div>
          <div className="form-row form-row-bottom">
            <TextAreas placehold="to view Budgets select: 
                - Delivery date, Location
                - Department, Cost center, Project"/>
            <TextAreas/>
          </div>
          <div className="form-result">
            <TotalButton/>
          </div>
      </Form>
    </div>
  );
};

export default FormLayout; 
