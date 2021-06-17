import React, { useContext } from 'react';
import './app.scss';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../main-page';
import ArticlesPage from '../articles-page';
import BlogsPage from '../blogs-page';
import VideosPage from '../videos-page';
import ResourcesPage from '../resources-page';
import PortfolioPage from '../portfolio-page';
import AccountPage from '../account-page';
import PageNotFound from '../page-not-found';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/articles/" component={ArticlesPage} />

      <Route path="/videos/" component={VideosPage} />
      <Route path="/blogs/" component={BlogsPage} />
      <Route path="/resources/" component={ResourcesPage} />
      <Route path="/portfolio/" component={PortfolioPage} />
      <Route path="/account/" component={AccountPage} />
      {/* если ни один путь не подошел-то страница не найдена */}
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default App;
