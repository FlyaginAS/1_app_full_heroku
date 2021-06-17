import React, { Component, useState } from 'react';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import { Route } from 'react-router-dom';
import './blogs-page.scss';
import BlogsPageChoose from './blogs-page-choose';
import BlogsPageCards from './blogs-page-cards';
import BlogsPageBlog from './blogs-page-blog';

const BlogsPage = () => {
  const topics = ['Путешествия', 'Разработка', 'Операционные системы'];

  return (
    <React.Fragment>
      <PageHeader />

      <Route
        path="/blogs/"
        exact
        render={() => <BlogsPageChoose topics={topics} />}
      />
      <Route
        path="/blogs/:topic/"
        exact
        render={({ match }) => {
          const { topic } = match.params;

          return <BlogsPageCards topics={topics} topic={topic} />;
        }}
      />
      <Route
        path="/blogs/:topic/:id"
        exact
        render={({ match }) => {
          const { id } = match.params;
          return <BlogsPageBlog topics={topics} id={id} />;
        }}
      />

      <PageFooter />
    </React.Fragment>
  );
};

export default BlogsPage;
