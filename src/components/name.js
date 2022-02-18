import React, { useState } from 'react';


import Card from './Card';
import './name.css';
import Yourname  from './yourname';


function Myname(props){
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();


    const  [title, uptite] = useState(props.title);

    const thefunc = ()=>{
        uptite("Updated");
    }
    return (
    <Card className="gen">
        
      
        <p>{month} {day} {year}</p>
      
        <div className='tandm'>
            <h2>{props.title}</h2>
            <div className="mount">
                <h2>{props.amount}</h2>
            </div>
        </div>
        <button onClick = {thefunc}>Update</button>
    
    </Card>);
}
export default Myname;