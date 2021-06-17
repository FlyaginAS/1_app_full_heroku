import React from 'react';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import './portfolio-page.scss';

const PortfolioPage = () => {
  return (
    <React.Fragment>
      <PageHeader />
      <div>This is portfolio page</div>
      <PageFooter />
    </React.Fragment>
  );
};

export default PortfolioPage;
