import React, { useEffect } from 'react';
import PageMainHeader from '../page-main-header';
import PageMainForm from '../page-main-form';
import PageMainSideNav from '../page-main-side-nav';
import MiniCard from '../mini-card';
import { connect } from 'react-redux';
import { fetchMinicards } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { compose } from 'redux';
import { withLoadService } from '../hoc-helpers';

const ArticlesPageCards = ({
  topics,
  topic,
  items,
  sortBy,
  loading,
  error,
  fetchMinicards,
}) => {
  useEffect(() => {
    fetchMinicards(topic, sortBy, 'articles');
  }, [topic, sortBy]);

  const renderMiniCards = (arr) => {
    return arr.map((item) => <MiniCard key={item._id} item={item} />);
  };
  let miniCards;
  if (loading) {
    miniCards = <Spinner />;
  } else if (error) {
    miniCards = <ErrorIndicator />;
  } else {
    miniCards = renderMiniCards(items);
  }

  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Статьи'} />
      </div>
      <form className="page-main-form">
        <PageMainForm />
      </form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'articles'} />
      </div>
      <div className="page-main-content">{miniCards}</div>
    </main>
  );
};

const mapStateToProps = ({ miniCards: { items, sortBy, loading, error } }) => {
  return {
    items,
    sortBy,
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
)(ArticlesPageCards);
