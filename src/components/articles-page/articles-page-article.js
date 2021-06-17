import React, { useCallback, useContext } from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';
import Article from '../article';

const ArticlesPageArticle = ({ topics, id }) => {
  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Статья'} />
      </div>
      <form className="page-main-form"></form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'articles'} />
      </div>
      <div className="page-main-content">
        <Article id={id} loc={'articles'} />
      </div>
    </main>
  );
};

export default ArticlesPageArticle;
