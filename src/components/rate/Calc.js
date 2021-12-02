import React, {Component} from 'react';
import s from "./Reate.module.css";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


class Calc extends Component {
    constructor() {
        super();
        this.state = {
            result: 0,

        }


    }

    static getDerivedStateFromProps(props, state) {
        return {rate: props.rate};
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let countCurrency = elements['count-currency'].value;
        let typeCurrency = elements['type-currency'].value;
        this.setState({result:countCurrency / this.state.rate[typeCurrency]});

    }


    render() {
        return (

            <>
                <div className={s.radioBlock}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">I want</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="controlled-radio-buttons-group"
                            value={this.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="buy" control={<Radio/>} label="buy"/>
                            <FormControlLabel value="sell" control={<Radio/>} label="sell"/>
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className={s.numInput}>
                    <form onSubmit={this.handleSubmit}

                    >
                        <input type="number" name={`count-currency`} id={`form`} defaultValue={100}/>
                        <select name="type-currency" id="form">
                            {Object.keys(this.props.rate).map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        <div className={s.subBtn}>
                            <Button type={`submit`} variant="outlined" endIcon={<SendIcon/>} value={`calc`}>
                                Send
                            </Button>
                        </div>

                    </form>

                </div>
                <p className={s.result}>USD:{this.state.result.toFixed(2)}</p>

            </>
        )
            ;
    }
}

export default Calc;