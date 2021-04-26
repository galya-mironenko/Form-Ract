import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Layout} from "antd";
import Header from "./components/header";
import Content from "./components/content";
import Menus from "./components/menu";

const { Sider } = Layout;

const App = () => {

  const styleContent = {
    margin: "24px 16px 0"
  };

  return ( 
    <div> 
      <Layout>
        <Sider breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }} className="styleSidebar">
              <Menus/>
        </Sider>
        <Layout>
          <Header/>
          <Content style={styleContent} />
        </Layout>
      </Layout>
  </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));