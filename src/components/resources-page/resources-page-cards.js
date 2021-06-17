import React, { useEffect } from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';
import { fetchMinicards } from '../../actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withLoadService } from '../hoc-helpers';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const ResourcesPageCards = ({
  topics,
  topic,
  items,
  loading,
  error,
  fetchMinicards,
}) => {
  useEffect(() => {
    fetchMinicards(topic, 'fresh', 'resources');
  }, [topic]);
  const renderFunction = (arr) => {
    return arr.map((item) => (
      <div className="resource" key={item._id}>
        <img src={item.img} className="resource__logo" alt="" />
        <h3 className="resource__heading">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource__link main-link"
          >
            {item.title}
          </a>
        </h3>
        <p className="resource__text">{item.description}</p>
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
        <PageMainHeader text={'Ресурсы'} />
      </div>
      <form className="page-main-form"></form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'resources'} />
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
)(ResourcesPageCards);
