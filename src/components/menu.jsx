import React from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  FileDoneOutlined,
  CheckCircleOutlined,
  WalletOutlined,
  ProfileOutlined,
  CarOutlined,
  FundOutlined,
  FileTextOutlined,
  FileOutlined,
  CreditCardOutlined,
  DollarOutlined,
  ChromeOutlined
} from "@ant-design/icons";

const Menus = () => {
    return(
      <nav>
        <div className="logotype"> 
          <a href="#">
            <ChromeOutlined />
          </a>
        </div>
        <Menu mode="inline" defaultSelectedKeys={["4"]} theme="light">
          <Menu.Item key="1" icon={<HomeFilled />}>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileDoneOutlined />} />
          <Menu.Item key="3" icon={<WalletOutlined />} />
          <Menu.Item key="4" icon={<CheckCircleOutlined />} />
          <Menu.Item key="5" icon={<ProfileOutlined/>} />
          <Menu.Item key="6" icon={<FileOutlined />} />
          <Menu.Item key="7" icon={<FileOutlined />} />
          <Menu.Item key="8" icon={<FileTextOutlined />} />
          <Menu.Item key="9" icon={<CreditCardOutlined />} />
          <Menu.Item key="10" icon={<FundOutlined />} />
          <Menu.Item key="11" icon={<CarOutlined />} />
          <Menu.Item key="12" icon={<DollarOutlined />} />
        </Menu>
      </nav>
    );
};
 
export default Menus; 