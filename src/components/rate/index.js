import React, {Component} from 'react';
import s from './Reate.module.css';
import RateBox from "./RateBox";
import Calc from "./Calc";
import {API_KEY} from "../../data";


class Rate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "date": new Date().toLocaleDateString(),
            "currencyRate": {},
        }
        this.currency = ["AUD", "EUR", "GBP", "CAD", "BGN"];


    }

    getRate = () => {
        fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`).then(data => {

            return data.json();
        })
            .then(data => {
                let result = {};
                for (let i = 0; i < this.currency.length; i++)
                    result[this.currency[i]] = data.conversion_rates[this.currency[i]];
                console.log()
                this.setState({currencyRate: result});

            })

    }

    componentDidMount() {
        return this.getRate()

    }

    render() {


        return (
            <>
                <div className={s.rateDiv}>

                    <div className={s.container}>
                        <h2 className={s.rateBoxH2}>Currency exchange rate{this.state.date}</h2>
                        <div className={s.rateBox}>
                            {Object.keys(this.state.currencyRate).map((item, index) => <RateBox key={`${item}_${index}`}
                                                                                                item={item}
                                                                                                currencyIn={this.state.currencyRate[item]}/>)}

                        </div>

                        <div className={s.boxCalc}>
                            <h2>Exchange calculator</h2>
                            <Calc rate={this.state.currencyRate}/>
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default Rate;