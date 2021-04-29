import React from "react";
import AppHeader from "./appHeader/AppHeader";
import Categories from "./categories/Categories";
import DropdownFilter from "../scenes/AdvencedFilter/AdvencedFilter";
import { FunnelPlotFilled } from '@ant-design/icons';

const ContentTopBlock = () => {
    const [showFilters, setShowFilters] = React.useState(false);

    return ( 
      <>
        <section className="section-top">
            <AppHeader title="Select items to add to the Purchase Order" />
            <div className="section-top-content">
                <button
                className={`filterBtn ${showFilters ? "filterHideBtn" : "filterShowBtn" }`}
                onClick={() => setShowFilters(!showFilters)}
                >
                {showFilters ? <FunnelPlotFilled rotate={180}/> : <FunnelPlotFilled />}
                {showFilters ? "Hide filters" : "Show filters"}

                </button>

                <Categories/>
            </div>
        </section>
        {showFilters && <DropdownFilter />}
      </>
    );
};

export default ContentTopBlock; 