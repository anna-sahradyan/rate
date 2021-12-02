import React, {Component} from 'react';
import s from './Exchange.module.css';

class Exchange extends Component {
    render() {
        return (
            <>
                <div className={s.contentDiv}>
                    <div className={s.contentList}>
                        <div className={s.imgList}>
                        <img src={`https://cdn4.iconfinder.com/data/icons/banking-and-finance/500/dollar-exchange-128.png`} alt=""/>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Exchange;