import React from 'react';
import 'antd/dist/antd.css';
import { Button  } from "antd";
import  { 
  MenuUnfoldOutlined,
  MenuFoldOutlined,
 } from '@ant-design/icons';
 
const FilterButtons = () =>{ 
return(
    <div>
        <Button type="primary" onClick={this.toggleCollapsed} className="general-bnt-style">
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
    </div>
    );
};

export default FilterButtons;