import React, { useEffect } from 'react';
import './article.scss';
import Tag from '../tag';
import img from './img/1.jpg';
import { withLoadService } from '../hoc-helpers';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';

const Article = ({ id, data, loading, error, fetchArticle, loc }) => {
  useEffect(() => {
    fetchArticle(loc, id);
  }, [id]);

  const renderTags = (arr) => {
    return arr.map((text) => {
      return <Tag clazz="article__tag" text={text} key={text} />;
    });
  };

  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  const date = new Date(data.createdAt);
  const dateText = date.toLocaleString().split(',')[0];

  return (
    <div className="article">
      <div className="article__header">
        <h2 className="article__h2">{data.title}</h2>
        <section className="article__author-section">
          <img className="article__author-avatar" src={img} />
          <div className="article__author">
            Автор
            <br />
            <span className="article__author-name">{data.author}</span>
          </div>
        </section>
        <section className="article__meta-section">
          Опубликовано
          <span className="article__meta-date">{dateText}</span>
        </section>
        <section className="article__tags">{renderTags(data.tags)}</section>
      </div>
      <div
        className="article__main"
        dangerouslySetInnerHTML={{ __html: data.body }}
      ></div>
      {/* <div className="ariticle__footer">article footer</div> */}
    </div>
  );
};

const mapStateToProps = ({ article: { data, loading, error } }) => {
  return {
    data,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { loadService } = ownProps;

  return {
    fetchArticle: fetchArticle(loadService, dispatch),
  };
};

export default compose(
  withLoadService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Article);
