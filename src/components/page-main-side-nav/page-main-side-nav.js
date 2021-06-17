import React from 'react';
import './page-main-side-nav.scss';
import { withRouter } from 'react-router-dom';

const PageMainSideNav = ({ topics, history, loc }) => {
  const elements = topics.map((topic) => {
    return (
      <li className="page-main-side-nav__item" key={topic}>
        <span
          className="page-main-side-nav__link main-link"
          onClick={() => {
            history.push(
              `/${loc}/${topic.toLowerCase().split(' ').join('_')}/`
            );
          }}
        >
          {topic}
        </span>
      </li>
    );
  });

  return (
    <div className="page-main-side-nav">
      <ul className="page-main-side-nav__list">{elements}</ul>
    </div>
  );
};

export default withRouter(PageMainSideNav);
