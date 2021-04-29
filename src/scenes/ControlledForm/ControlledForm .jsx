import React, { useState } from 'react';
import 'antd/dist/antd.css';
import "./contrelledForm.css";
import Tags from "../../components/form/tag";
import Calendars from "../../components/form/calendar";
import PlainTxt from "../../components/form/plainText";
import TextAreas from "../../components/form/textarea";
import TotalButton from "../../components/form/totalButton";
import { Form, Input,Select } from 'antd';
import { ExclamationCircleFilled, CaretDownFilled } from '@ant-design/icons';

const { Option } = Select;

const ControlledForm = () => {
  const [form] = Form.useForm();
  const [formLayout] = useState('vertical');

  const handleChange = value => {
    console.log(`selected ${value}`);
  };
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

            <Form.Item label="Location" required="true">
                <Select placeholder="----------" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/> }>
                  <Option value="all">Ukraine</Option>
                  <Option value="other">USA</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Legal Entity" required="true">
              <Input placeholder="select Location first"  
              prefix={< ExclamationCircleFilled className="site-form-item-icon" />}
              />
            </Form.Item>

            <Tags/>
          </div >
          <div className="form-row">
            <PlainTxt  label="Supplier" plainTxt="Amazon" />
            <PlainTxt  label="Currency" plainTxt="USD" />
            <PlainTxt  label="Terms of Payment" plainTxt="Prepayment"/>
            <PlainTxt  label="Contract" plainTxt="# 20304 – Precoro Inc." className="no-required"/>
          </div>
          <div className="form-row">
          <Form.Item label="Department" required="true">
                <Select defaultValue="cms" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/> }>
                  <Option value="cms">CMS</Option>
                  <Option value="other">CMS2</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Payment method" >
                <Select defaultValue="bank" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/> }>
                  <Option value="bank">Bank Transfer</Option>
                  <Option value="other">Card</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Cost center" required="true">
                <Select defaultValue="poster" onChange={handleChange}suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/> } >
                  <Option value="poster">Posters</Option>
                  <Option value="other">Post</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Project">
                <Select defaultValue="web" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/> }>
                  <Option value="web">Website</Option>
                  <Option value="other">Website</Option>
                </Select>
            </Form.Item>
          </div>
          <div className="form-row form-row-bottom">

            <ExclamationCircleFilled className="site-form-item-icon text-area-icon"/>
            <div className="textarea-requer">
              <TextAreas 
              name="budget"
              placehold="to view Budgets select:&#10;- Delivery date, Location&#10;- Department, Cost center, Project"/>
            </div>
            <TextAreas placehold="Write your note..."/>

          </div>
          <div className="form-result">
            <TotalButton/>
          </div>
      </Form>
    </div>
  );
};

export default ControlledForm ; 
