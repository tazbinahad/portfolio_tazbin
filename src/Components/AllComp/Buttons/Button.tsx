import React from 'react';
import './Button.scss';
import { buttonType } from './type';
const Button: React.FC<buttonType> = ({ type }) => {
  const buttonType = type === '';
  return (
    <div className={`t_button`}>
      <button>send message</button>
    </div>
  );
};

export default Button;
