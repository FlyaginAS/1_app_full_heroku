import React from 'react';
import './page-not-found.scss';
import PageHeader from '../page-header';
import PageFooter from '../page-footer';

const PageNotFound = () => {
  return (
    <React.Fragment>
      <PageHeader />
      <main className="page-main">
        <div className="page-main-header"></div>
        <form className="page-main-form"></form>
        <div className="page-main-side-nav"></div>
        <div className="page-main-content">Page not found </div>
      </main>
      <PageFooter />
    </React.Fragment>
  );
};

export default PageNotFound;
