import React, {Component} from 'react';
import s from './Reate.module.css';

class RateBox extends Component {

       



    render() {

        return (
            <div className={s.card}>
                <p className={s.currency}>{this.props.item}</p>
                <p className={s.amount}><b>{this.props.currencyIn.toFixed(2)}*</b></p>
                <p className={s.textBuy}>You can buy for </p>


            </div>
        );
    }
}

export default RateBox;