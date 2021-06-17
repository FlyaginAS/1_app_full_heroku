import React from 'react';
import FreshArticle from '../fresh-article';
import FreshVideo from '../fresh-video';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import PopularThisMonth from '../popular-this-month';

import './main-page.scss';

const MainPage = () => {
  return (
    <React.Fragment>
      <PageHeader />

      <main className="page-main-default">
        <FreshArticle />

        <FreshVideo />

        <PopularThisMonth />
      </main>

      <PageFooter />
    </React.Fragment>
  );
};

export default MainPage;
