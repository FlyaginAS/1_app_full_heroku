import React, { useEffect } from 'react';
import PageMainHeader from '../page-main-header';
import PageMainForm from '../page-main-form';
import PageMainSideNav from '../page-main-side-nav';
import MiniCard from '../mini-card';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withLoadService } from '../hoc-helpers';
import { fetchMinicards } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BlogsPageCards = ({
  topics,
  topic,
  sortBy,
  items,
  loading,
  error,
  fetchMinicards,
}) => {
  useEffect(() => {
    fetchMinicards(topic, sortBy, 'blogs');
  }, [topic, sortBy]);

  const renderFunction = (arr, location) => {
    return arr.map((item) => (
      <MiniCard key={item._id} item={item} location={location} />
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
        <PageMainHeader text={'Блог'} />
      </div>
      <form className="page-main-form">
        <PageMainForm />
      </form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'blogs'} />
      </div>
      <div className="page-main-content">{content}</div>
    </main>
  );
};

const mapStateToProps = ({ miniCards: { items, loading, error, sortBy } }) => {
  return {
    items,
    loading,
    error,
    sortBy,
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
)(BlogsPageCards);
