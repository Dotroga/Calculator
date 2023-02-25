import React from 'react';
import './Buttons.css'

type ButtonPropsType = {
  buttons: {value: string, name: string}[]
}

const Buttons: React.FC<ButtonPropsType> = ({buttons}) => {
  return (
    <div className='buttons'>
      {buttons.map((b)=>{
        return <div
          key={b.name}
          className={`button ${b.name}`}>{b.value}
        </div>
      })}
    </div>);
};

export default Buttons;