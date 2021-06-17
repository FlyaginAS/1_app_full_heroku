import React from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';

const ResourcesPageChoose = ({ topics }) => {
  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Ресурсы'} />
      </div>
      <form className="page-main-form"></form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'resources'} />
      </div>
      <div className="page-main-content">Выберите ресурс </div>
    </main>
  );
};

export default ResourcesPageChoose;
