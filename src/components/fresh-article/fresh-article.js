import React, { useEffect } from 'react';
import './fresh-article.scss';
import Tag from '../tag';
import { withLoadService } from '../hoc-helpers';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchFreshMiniarticle } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const FreshArticle = ({ data, loading, error, fetchFreshMiniarticle }) => {
  const id = '5f9abac4ad9a722bc018b6fb';
  useEffect(() => {
    fetchFreshMiniarticle('articles', id);
  }, [id]);

  const _renderTags = (arr) => {
    return arr.map((item) => (
      <Tag clazz="fresh-article__tag" text={item} key={item} />
    ));
  };
  if (loading) return <Spinner />;
  if (error) return <ErrorIndicator />;

  const date = new Date(data.createdAt);
  const dateText = date.toLocaleString().split(',')[0];

  return (
    <article className="fresh-article">
      <header className="fresh-article__header">
        <span className="fresh-article__strong">Свежая Статья </span>
        <time className="fresh-article__time" dateTime="2020-08-24">
          {dateText}
        </time>
        <h2 className="fresh-article__h2">{data.title}</h2>
      </header>
      <div className="fresh-article__meta article-meta">
        <img className="article-meta__author-avatar" src="img/avatars/1.jpg" />

        <div className="article-meta__author-section">
          <span className="article-meta__author">Автор</span>
          <span className="article-meta__name">{data.author}</span>
        </div>
        <div className="article-meta__comments-section">
          <div className="article-meta__comments">
            <span className="article-meta__comments-count">3 </span> комментария
          </div>
          <a className="article-meta__comments-link main-link" href="#">
            Добавить комментарий &#8594;
          </a>
        </div>
      </div>
      <div className="fresh-article__content">
        <p className="fresh-article__paragraph">{data.description}</p>
        <a className="fresh-article__link main-link" href="#">
          Читать
        </a>
      </div>
      <div className="fresh-article__tags">{_renderTags(data.tags)}</div>
    </article>
  );
};

const mapStateToProps = ({ miniFreshArticle: { data, loading, error } }) => {
  return {
    data,
    loading,
    error,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { loadService } = ownProps;
  return {
    fetchFreshMiniarticle: fetchFreshMiniarticle(loadService, dispatch),
  };
};

export default compose(
  withLoadService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FreshArticle);
