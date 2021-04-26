import React from "react";
import ContentTopBlock from "./content-top-block";
import ContentBottomBlock from "./content-bottom-block";
import Exchange from "./exchance";

const Content = () => {
    return (
        <div className="site-layout-background">
          <ContentTopBlock/>
          <ContentBottomBlock/>
          <Exchange/>
        </div>
    );
};

export default Content; 