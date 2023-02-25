import React, {useReducer} from 'react';
import './App.css';
import Buttons from "./Buttons/Buttons";
import {buttons, reducer, value} from "./reducer";


const App = () => {
  const [state, dispatch] = useReducer(reducer, value)
  return (
    <div className="App">
      <div className='Screen'>
        {state}
      </div>
      <Buttons buttons={buttons}/>
    </div>
  );
}

export default App;
