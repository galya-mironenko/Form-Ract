import React from "react";
import { Button, DatePicker, Select } from "antd";
import "moment/locale/zh-cn";
import "./advencedFilters.css";
import { CaretDownFilled,CalendarFilled } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

const AdvencedFilter = () => {

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="childContainer">
      <div className="form-filter-block">
        <div className="filter-block ">
          <div className="form-colum">
            <div className="form-filter-info">
              <div className="form-filter-item">
                <label for="fname">Request for proposals</label>
                
                <input type="text" id="fname" name="fname"/>
              </div>
              <div className="form-filter-item">
                <label for="lname">Purchase requsition </label>
                <input type="text" id="lname" name="lname" />
              </div>
            </div>
            <div className="form-filter-info">
              <div className="form-filter-item">
                <label for="fname">Creation date</label>
                <DatePicker
                  placeholder="All dates"
                  dateRender={current => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = "1px solid #1890ff";
                      style.borderRadius = "50%";
                    }
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              </div>
              <div className="form-filter-item">
                <label for="lname">Delivery date</label>
                <RangePicker
                  picker="month"
                  dateRender={current => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = "1px solid #1890ff";
                      style.borderRadius = "50%";
                    }
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
            
          </div>
          <div className="line"></div>
          <div className="form-colum">
            <div className="form-filter-info">
              <div className="form-filter-item">
                <label for="sname">Location</label>
                <Select defaultValue="all" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/>}>
                  <Option value="all">all</Option>
                  <Option value="other">other</Option>
                </Select>
              </div>
              <div className="form-filter-item">
                <label for="sname">Requester</label>
                <Select defaultValue="all" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/>}>
                  <Option value="all">all</Option>
                  <Option value="first">first</Option>
                </Select>
              </div>
            </div>
            <div className="form-filter-info">
              <div className="form-filter-item">
                <label for="sname">Depatment</label>
                <Select defaultValue="all" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/>}>
                  <Option value="all">all</Option>
                  <Option value="other">other</Option>
                </Select>
              </div>
              <div className="form-filter-item">
                <label for="lname">Cost Center</label>
                <Select defaultValue="all" onChange={handleChange} suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/>}>
                  <Option value="all">all</Option>
                  <Option value="first">firtst</Option>
                </Select>
              </div>
            </div>
          </div>

          <div className="form-colum form-colum-small">
            <div className="form-filter-info">
              <div className="form-filter-item">
                <label for="lname">Total</label>
                <input placeholder="from" type="text" id="lname" name="lname" />
              </div>
              <div className="form-filter-item form-filter-item-small">
                <Select
                  defaultValue="uah"
                  onChange={handleChange}
                  className="form-item-small-select"
                  suffixIcon={<CaretDownFilled   className="site-form-item-icon arrow-style-select"/>}
                >
                  <Option value="uah">UAH</Option>
                  <Option value="uah1">UAH</Option>
                </Select>
                <input placeholder="to" type="text" id="lname" name="lname" />
              </div>
            </div>
          </div>
        </div>
        <div className="filter-block wrap-btn-filter">
          <div>
            <Button htmlType="button" className="btn btn-reset">
              Reset filters
            </Button>
          </div>
          <div>
            <Button type="link" htmlType="submit" className="btn white-btn">
              Save filter
            </Button>
            <Button type="primary" htmlType="button" className=" blue-btn">
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvencedFilter;
