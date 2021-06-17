import React from 'react';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import './account-page.scss';

const AccountPage = () => {
  return (
    <React.Fragment>
      <PageHeader />
      <div>This is account page</div>
      <PageFooter />
    </React.Fragment>
  );
};

export default AccountPage;
