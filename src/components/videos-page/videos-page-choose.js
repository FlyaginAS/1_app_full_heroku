import React from 'react';
import PageMainHeader from '../page-main-header';
import PageMainSideNav from '../page-main-side-nav';
import PageMainForm from '../page-main-form';

const VideosPageChoose = ({ topics }) => {
  return (
    <main className="page-main">
      <div className="page-main-header">
        <PageMainHeader text={'Видео'} />
      </div>
      <form className="page-main-form">{/* <PageMainForm /> */}</form>
      <div className="page-main-side-nav">
        <PageMainSideNav topics={topics} loc={'videos'} />
      </div>
      <div className="page-main-content">Выберите плейлист </div>
    </main>
  );
};

export default VideosPageChoose;
