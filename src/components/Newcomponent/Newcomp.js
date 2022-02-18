import React  from "react";
import './Newcomp.css';
import FormE from './FormExpenses';

function Newcomponents(props){

    const Myexpens = (excutive)=>{
        const par = {
            ...excutive,
            id : Math.random().toString()
        }
        props.onadding(par)

    }
    
    return <div className="new-expense">
                <FormE onSaying = {Myexpens} />
           </div>
}

export default Newcomponents;