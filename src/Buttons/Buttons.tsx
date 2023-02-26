import React from 'react';
import './Buttons.css'
import {ButtonsType} from "../reducer";

type ButtonPropsType = {
  buttons: ButtonsType
  callBack: (type: string)=>void
}

const Buttons: React.FC<ButtonPropsType> = ({buttons,callBack}) => {
  return (
    <div className='buttons'>
      {buttons.map((b)=>{
        return <div
          key={b.name}
          className={`button ${b.name}`}
          onClick={()=>callBack(b.value)}>
          {b.value}
        </div>
      })}
    </div>);
};

export default Buttons;