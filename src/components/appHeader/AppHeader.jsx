import React from "react";
import "./appHeader.css";

const AppHeader = (props) => {
    const { title } = props;
    return <h2 className="header">{title}</h2>
};

export default AppHeader; 
