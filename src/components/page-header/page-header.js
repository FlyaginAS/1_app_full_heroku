import React from 'react';
import './page-header.scss';
import Search from '../search';
import SiteLogo from '../site-logo';
import MainNav from '../main-nav/main-nav';

const PageHeader = () => {
  return (
    <header className="page-header">
      <SiteLogo />
      <MainNav />
      <Search />
    </header>
  );
};

export default PageHeader;
