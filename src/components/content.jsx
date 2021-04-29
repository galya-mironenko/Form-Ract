import React from "react";
import ContentTopBlock from "./contentTopBlock";
import ContentBottomBlock from "./contentBottomBlock";
import ExchangeRate from "./exchangeRate/ExchengeRate";

const Content = () => {
    return (
        <div className="site-layout-background">
          <ContentTopBlock/>
          <ContentBottomBlock/>
          <ExchangeRate/>
        </div>
    );
};

export default Content; 