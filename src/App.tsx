import React, {useReducer} from 'react';
import './App.css';
import Buttons from "./Buttons/Buttons";
import {buttons, reducer, value} from "./reducer";


const App = () => {

  const [state, dispatch] = useReducer(reducer, value)
  const change = (type: string) => dispatch(type)

  return (
    <div className="App">
      <div className='Screen'>
        <div>{state[0]}</div>
        <div>{state[1]}</div>
      </div>
      <Buttons buttons={buttons} callBack={change}/>
    </div>
  );
}

export default App;
