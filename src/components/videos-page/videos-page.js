import React from 'react';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';
import { Route } from 'react-router-dom';
import './videos-page.scss';
import VideosPageChoose from './videos-page-choose';
import VideoPageVideos from './video-page-videos';

const VideosPage = () => {
  const topics = ['HTML', 'CSS'];

  return (
    <React.Fragment>
      <PageHeader />

      <Route
        path="/videos/"
        exact
        render={() => <VideosPageChoose topics={topics} />}
      />
      <Route
        path="/videos/:topic/"
        exact
        render={({ match }) => {
          const { topic } = match.params;

          return <VideoPageVideos topics={topics} topic={topic} />;
        }}
      />
      <PageFooter />
    </React.Fragment>
  );
};

export default VideosPage;
