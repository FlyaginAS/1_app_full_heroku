import React from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';

const BlogsPageChoose = ({ topics }) => {
  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Блог'} />
      </div>
      <form className="page-main-form"></form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'blogs'} />
      </div>
      <div className="page-main-content">Выберите статью </div>
    </main>
  );
};

export default BlogsPageChoose;
