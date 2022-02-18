import Myname from './name';
import './expenses.css';
import ExpensesFilter from './EXPFl';
import { useState } from 'react';

function Expenses(props){
    const [prev, newa] = useState('2019')

    const orfun = (sette)=>{
        newa(sette)


    }


    return (
        <div className='expenses'>
            <ExpensesFilter  selected = {prev} orfun ={orfun} />

            {props.mame.map(myspense => <Myname 
            title = {myspense.title}
            amount = {myspense.amount}
            date = {myspense.date}
            />)}
            
        </div>
    )
}
export default Expenses;