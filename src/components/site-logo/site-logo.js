import React from 'react';
import './site-logo.scss';
import { ReactComponent as MainLogo } from './img/main-logo.svg';
import { Link } from 'react-router-dom';

const SiteLogo = () => {
  return (
    <Link to="/" className="site-logo">
      <MainLogo className="site-logo__icon" />
      <span className="site-logo__text">4me.tech</span>
    </Link>
  );
};

export default SiteLogo;
