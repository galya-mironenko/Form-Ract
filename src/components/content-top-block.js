import React from "react";
import AppHeader from "./app-header";
import Categories from "./categories";
import Filter from "./filter/filter";

const ContentTopBlock = () => {
    return ( 
        <section className="section-top">
            <AppHeader title="Select items to add to the Purchase Order" />
            <div className="section-top-content">
                <Filter className="styleBtn"/>
                <Categories/>
            </div>
        </section>
    );
};

export default ContentTopBlock; 