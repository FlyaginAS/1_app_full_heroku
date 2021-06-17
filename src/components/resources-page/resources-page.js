import React from 'react';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import { Route } from 'react-router-dom';
import './resources-page.scss';
import ResourcesPageChoose from './resources-page-choose';
import ResourcesPageCards from './resources-page-cards';

const ResourcesPage = () => {
  const topics = [
    'Tools',
    'HTML',
    'CSS',
    'JavaScript',
    'Fonts',
    'Colors',
    'Images',
    'Icons',
    'Design',
    'Blogs Communities',
    'Plan Test Deploy',
    'NodeJS',
  ];

  return (
    <React.Fragment>
      <PageHeader />

      <Route
        path="/resources/"
        exact
        render={() => <ResourcesPageChoose topics={topics} />}
      />
      <Route
        path="/resources/:topic/"
        exact
        render={({ match }) => {
          const { topic } = match.params;

          return <ResourcesPageCards topics={topics} topic={topic} />;
        }}
      />
      <PageFooter />
    </React.Fragment>
  );
};

export default ResourcesPage;
