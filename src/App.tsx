import React, {useReducer} from 'react';
import './App.css';
import Buttons from "./Buttons/Buttons";
import {buttons, data, reducer} from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer,data)
  const change = (type: string) => {
    dispatch(type)
  }



  return (
    <div className="App">
      <div className={`Screen ${state.error && 'error'}`}>
        <div>{state.value}</div>
      </div>
      <Buttons buttons={buttons} callBack={change}/>
    </div>
  );
}
export default App;
