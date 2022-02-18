import { useState } from 'react';
import Expenses from './components/expenses';
import Newcomponents from './components/Newcomponent/Newcomp';

const Nw_mame = [
  {title : "john", amount : 946, date : new Date(2021, 4, 1)},
  {title : "Chris", amount : 700, date : new Date(2021, 10, 23)},
  {title : "Alinco", amount: 500, date : new Date(2021, 11, 11)},
];

function App() {

  const[mame, setmame] = useState(Nw_mame)

  const jfunc = (neow)=>{
    setmame(previo =>{
      return [neow, ...previo]
    })
  }
  
 

  return (
    <div className="App">
      <header className="App-header">
      
        <Newcomponents onadding = {jfunc} />
        <Expenses mame = {mame}>

        </Expenses>
      </header>
    </div>
  );
}

export default App;
