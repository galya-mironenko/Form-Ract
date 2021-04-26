import React from 'react';
import InputCurrency  from './exchange/input-currency';
import CaptionExchenge  from './exchange/caption-exchenge';

const Exchange = () => {

    return (
        <section className="exchange">
            <CaptionExchenge textCaption={"Exchange rate"} ></CaptionExchenge>
            <div className="input-grop">
                <InputCurrency label={"USD:UAH"} />
                <InputCurrency label={"USD:EUR"} />
                <InputCurrency label={"USD:VND"} />
            </div>
        </section>
    );
};

export default Exchange; 