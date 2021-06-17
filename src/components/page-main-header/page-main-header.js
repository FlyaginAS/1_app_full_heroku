import React from 'react';
import './page-main-header.scss';

const PageMainHeader = ({ text }) => {
  return (
    <div className="page-main-header">
      <h1 className="page-main-header__h1">{text}</h1>
    </div>
  );
};

export default PageMainHeader;
