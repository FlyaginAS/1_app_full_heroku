import React from 'react';
import Tag from '../tag';
import './mini-card.scss';
import avatar from './img/1.jpg';
import { withRouter } from 'react-router-dom';

const MiniCard = (props) => {
  const renderTags = (arr) => {
    return arr.map((text) => (
      <Tag clazz="mini-card__tag" text={text} key={text} />
    ));
  };

  const { createdAt, title, author, tags, _id } = props.item;
  const { history } = props;

  const date = new Date(createdAt);
  const dateText = date.toLocaleString().split(',')[0];

  const tagElements = renderTags(tags);
  return (
    <article className="page-main-content__mini-article mini-card">
      <header className="mini-card__header">
        <div className="mini-card__wrap-date">
          Статья <span className="mini-card__date">{dateText}</span>
        </div>

        <span
          className="mini-card__header-hx"
          onClick={() => history.push(_id)}
        >
          {title}
        </span>
      </header>
      <section className="mini-card__author-section">
        <img className="mini-card__avatar" src={avatar} />
        <div className="mini-card__author">
          Автор
          <br />
          <span className="mini-card__author-name">{author}</span>
        </div>
      </section>
      <section className="mini-card__tags">{tagElements}</section>
    </article>
  );
};

export default withRouter(MiniCard);
