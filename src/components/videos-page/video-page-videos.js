import React, { useEffect } from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';
import { compose } from 'redux';
import { withLoadService } from '../hoc-helpers';
import { connect } from 'react-redux';
import { fetchMinicards } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import PageMainForm from '../page-main-form';

const VideoPageVideos = ({
  topics,
  topic,
  sortBy,
  items,
  loading,
  error,
  fetchMinicards,
}) => {
  useEffect(() => {
    fetchMinicards(topic, sortBy, 'videos');
  }, [topic, sortBy]);

  const renderFunction = (arr) => {
    return arr.map((item) => (
      <div className="page-main__video-item" key={item._id}>
        <div className="video-frame">
          <iframe
            width="400px"
            height="250px"
            src={item.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="video-description">{item.description}</p>
      </div>
    ));
  };
  let content;
  if (loading) {
    content = <Spinner />;
  } else if (error) {
    content = <ErrorIndicator />;
  } else {
    content = renderFunction(items);
  }

  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Видео'} />
      </div>
      <form className="page-main-form">{/* <PageMainForm /> */}</form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'videos'} />
      </div>
      <div className="page-main-content">{content}</div>
    </main>
  );
};

const mapStateToProps = ({ miniCards: { items, loading, error } }) => {
  return {
    items,
    loading,
    error,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { loadService } = ownProps;
  return {
    fetchMinicards: fetchMinicards(loadService, dispatch),
  };
};

export default compose(
  withLoadService(),
  connect(mapStateToProps, mapDispatchToProps)
)(VideoPageVideos);
