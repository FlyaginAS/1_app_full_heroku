import React from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';
import Article from '../article';

const BlogsPageBlog = ({ topics, id }) => {
  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Статья'} />
      </div>
      <form className="page-main-form"></form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'blogs'} />
      </div>
      <div className="page-main-content">
        <Article id={id} loc={'blogs'} />
      </div>
    </main>
  );
};

export default BlogsPageBlog;
