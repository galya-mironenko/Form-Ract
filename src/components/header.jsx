import React from "react";
import 'antd/dist/antd.css';
import { Breadcrumb } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

const Header = () => {
    return (<header className="site-layout-sub-header-background">
        <Breadcrumb>
            <Breadcrumb.Item href="#">
                <LeftOutlined />
                <span>Dashboard</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    </header> );
};

export default Header; 