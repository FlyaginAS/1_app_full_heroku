import React, { Component } from 'react';
import './main-nav.scss';
import { ReactComponent as ArticlesLogo } from './img/articles.svg';
import { ReactComponent as VideocamLogo } from './img/videocam.svg';
import { ReactComponent as BlogLogo } from './img/blog.svg';
import { ReactComponent as ResourcesLogo } from './img/resources.svg';
import { ReactComponent as PortfolioLogo } from './img/portfolio.svg';
import { ReactComponent as AccountLogo } from './img/account.svg';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link to="/articles/" className="main-nav__link">
            <ArticlesLogo className="main-nav__icon" />
            <span className="main-nav__span">Статьи</span>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/videos/" className="main-nav__link">
            <VideocamLogo className="main-nav__icon" />
            <span className="main-nav__span">Видео</span>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/blogs/" className="main-nav__link">
            <BlogLogo className="main-nav__icon" />
            <span className="main-nav__span">Блог</span>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/resources/" className="main-nav__link">
            <ResourcesLogo className="main-nav__icon" />
            <span className="main-nav__span">Ресурсы</span>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/portfolio/" className="main-nav__link">
            <PortfolioLogo className="main-nav__icon" />
            <span className="main-nav__span">Портфолио</span>
          </Link>
        </li>
        <li className="main-nav__item">
          <Link to="/account/" className="main-nav__link">
            <AccountLogo className="main-nav__icon" />
            <span className="main-nav__span">Аккаунт</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
