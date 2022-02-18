import React, { useState } from "react";
import './FormExpenses.css';

const FormE = (props)=>{
    const [title, setmytitle]  = useState('');
    const [amount, setamount] = useState('');
    const [date, setdate] = useState('');


    const Myfu = (event) =>{
        setmytitle(event.target.value)
    };

    
    const Amou = (event) =>{
        setamount(event.target.value)
    };

    
    const Myda = (event) =>{
        setdate(event.target.value)
    };


    const submitHand = (event)=>{
        event.preventDefault();
        const mydict={
            title:title,
            amount:amount,
            date:new Date(date),
        }

        props.onSaying(mydict);
        setmytitle('');
        setamount('');
        setdate('');

    }

    return <form onSubmit={submitHand}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={Myfu} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01"  step="0.01" value={amount} onChange={Amou} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2018-05-21" max= "2022-11-14" value={date} onChange={Myda} />
                </div>

                <div className="new-expense__control">
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    }

export default FormE;