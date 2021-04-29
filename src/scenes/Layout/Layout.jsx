import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import"./layout";

const {Content, Sider, Header } = Layout;

const Layout = () => {
    return (
        <div>
            <Header/>
            <Sider
                breakpoint="xs"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                trigger={null} collapsible collapsed={this.state.collapsed}
            />
            <Content  className="general-style-content"/>
    </div>
    );
};

export default Layout; 