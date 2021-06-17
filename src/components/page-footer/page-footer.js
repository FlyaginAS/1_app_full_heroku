import React, { Component } from 'react';
import './page-footer.scss';

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <section className="page-description">
        <p className="page-description__paragraph">
          4me - это полезные ресурсы под рукой, простой язык и курсы(скоро!).
          Курсы будут как платные, так и бесплатные. Подход, использованный при
          написании курсов, позволит быстро усвоить материал любому человеку.
        </p>
      </section>
      <section className="page-social">
        <div className="page-social__youtube">
          <a href="#" className="page-social__link main-link">
            YouTube
          </a>
        </div>
        <div className="page-social__udemy">
          <a href="#" className="page-social__link main-link">
            {' '}
            UDEMY
          </a>
        </div>
      </section>
    </footer>
  );
};

export default PageFooter;
