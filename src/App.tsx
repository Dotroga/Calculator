import React, {useReducer} from 'react';
import './App.css';
import Buttons from "./Buttons/Buttons";
import {buttons, data, reducer} from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer,data)
  const change = (type: string) => dispatch(type)

  console.log(state)
  return (
    <div className="App">
      <div className='Screen'>
        <div>{state.value}</div>
      </div>
      <Buttons buttons={buttons} callBack={change}/>
    </div>
  );
}
export default App;
