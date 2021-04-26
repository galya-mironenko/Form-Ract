import React from "react";
import Menus from "./menu";
import "antd/dist/antd.css";

const Sider = () => {
    return (
        <div breakpoint="lg"
             collapsedWidth="0"
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