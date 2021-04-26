import React from "react";
import AppHeader from "./app-header";
import FormLayout from "./form";

const ContentBottomBlock = () => {
    return ( 
        <>
            <AppHeader title="FIll out the details for this Purchase Order" />
            <section className="section-bottom">
                <div className="section-bottom-content">
                    <FormLayout />
                </div>
            </section>
        </>
    );
};

export default ContentBottomBlock; 