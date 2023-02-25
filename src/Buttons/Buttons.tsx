import React from 'react';
import './Buttons.css'

type ButtonPropsType = {
  buttons: {value: string, name: string}[]
  callBack: (type: string)=>void
}

const Buttons: React.FC<ButtonPropsType> = ({buttons,callBack}) => {
  return (
    <div className='buttons'>
      {buttons.map((b)=>{
        return <div
          key={b.name}
          className={`button ${b.name}`}
          onClick={()=>callBack(b.name)}
        >
          {b.value}
        </div>
      })}
    </div>);
};

export default Buttons;