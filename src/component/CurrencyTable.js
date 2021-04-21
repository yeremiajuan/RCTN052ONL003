import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';

const CurrencyTable = () => {
    const [currencyRates, setCurrencyRates] = useState([]);

    const getCurrencyRates = async () => {
        try {
            const response = await axios(
                "https://api.exchangerate.host/latest?base=IDR&symbols=IDR,CAD,JPY,CHF,EUR,USD&amount=10000"
            );
            const arrCurr = [];
            const currTrade = 0.005;
            const rates = response.data.rates;
            const jenis = Object.keys(rates);
            const harga = Object.values(rates);
            jenis.forEach((jenisC, indexKey) => {
                harga.forEach((valueC, indexV) => {
                    if (indexKey === indexV) {
                        arrCurr.push({
                            currency: jenisC,
                            value: valueC,
                            sell: valueC + valueC * currTrade,
                            buy: valueC - valueC * currTrade,
                        });
                    }
                });
            });

            setCurrencyRates(arrCurr);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getCurrencyRates();
    }, []);

    console.log(currencyRates);

    return (
        <div>
            <table id="curr-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>We Buy</th>
                        <th>Exchange Rate</th>
                        <th>We Sell</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(currencyRates).map((cr, index) => (
                        <tr key={index}>
                            <td>{cr.currency}</td>
                            <td>{cr.buy}</td>
                            <td>{cr.value}</td>
                            <td>{cr.sell}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

            <br />
            *Base currency is IDR
            <br />
            *As for the API, <a href="https://api.exchangerate.host">https://api.exchangerate.host</a> is used
        </div>
    )
}

export default CurrencyTable
