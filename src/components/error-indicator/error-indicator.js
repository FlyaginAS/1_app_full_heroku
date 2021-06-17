import React from 'react';
import './error-indicator.scss';
import icon from './img/errImg.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span>BOOM!!</span>
      <span>Возникла ошибка. Описание в консоли.</span>
    </div>
  );
};
export default ErrorIndicator;
