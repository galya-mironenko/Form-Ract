import React from "react";
import AppHeader from "./appHeader/AppHeader";
import ControlledForm from "../scenes/ControlledForm/ControlledForm ";

const ContentBottomBlock = () => {
    return ( 
        <>
            <AppHeader title="FIll out the details for this Purchase Order" />
            <section className="section-bottom">
                <div className="section-bottom-content">
                    <ControlledForm />
                </div>
            </section>
        </>
    );
};

export default ContentBottomBlock; 