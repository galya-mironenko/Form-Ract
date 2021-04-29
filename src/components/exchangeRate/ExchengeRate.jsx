import React from 'react';
import "./exchangeRate.css";
import InputCurrency  from './InputCurrency';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const ExchangeRate = () => {
    return (
        <section className="exchange">
            <Collapse expandIconPosition="right" ghost>
                <Panel header="Exchange rate" >
                    <div className="input-grop">
                    <InputCurrency label={"USD:UAH"} placeholder={"26.543545"}  />
                    <InputCurrency label={"USD:EUR"} placeholder={"26.543545"}/>
                    <InputCurrency label={"USD:VND"} placeholder={"24232.500"}/>
                    </div> 
                </Panel>
            </Collapse>
        </section>
    );
};

export default ExchangeRate; 