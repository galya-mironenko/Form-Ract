import React from "react";
import Menus from "../../components/menu";
import "./index.css";
import "./sider.css";
import "antd/dist/antd.css";

const Sider = () => {
    return (
        <div breakpoint="lg"
             collapsedWidth="0"
             theme="light"
             onBreakpoint={(broken) => {
              console.log(broken);
        }}

        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        
            <Menus/>
        </div>
    );
};

export default Sider; 