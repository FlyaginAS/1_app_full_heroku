import React from 'react';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import { Route } from 'react-router-dom';
import './articles-page.scss';
import ArticlesPageChoose from './articles-page-choose';
import ArticlesPageCards from './articles-page-cards';
import ArticlesPageArticle from './articles-page-article';

const ArticlesPage = () => {
  const topics = [
    'HTML',
    'CSS',
    'GIT',
    'Avocode',
    'JavaScript',
    'React',
    'Webpach',
    'NodeJS',
    'Express',
    'MongoDB',
    'Mongoose',
  ];

  return (
    <React.Fragment>
      <PageHeader />

      <Route
        path="/articles/"
        exact
        render={() => <ArticlesPageChoose topics={topics} />}
      />
      <Route
        path="/articles/:topic/"
        exact
        render={({ match }) => {
          const { topic } = match.params;
          return <ArticlesPageCards topics={topics} topic={topic} />;
        }}
      />
      <Route
        path="/articles/:topic/:id"
        exact
        render={({ match }) => {
          const { id } = match.params;
          return <ArticlesPageArticle topics={topics} id={id} />;
        }}
      />

      <PageFooter />
    </React.Fragment>
  );
};

export default ArticlesPage;
