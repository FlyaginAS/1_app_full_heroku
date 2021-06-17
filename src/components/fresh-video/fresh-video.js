import React, { Component } from 'react';
import './fresh-video.scss';

const FreshVideo = () => {
  return (
    <article className="fresh-video">
      <header className="fresh-video__header">
        <span className="fresh-video__strong">Последнее Видео </span>
        <time className="fresh-video__time" dateTime="2020-06-25">
          Июнь 06, 2020
        </time>
        <h2 className="fresh-video__h2">Невероятный курс. HTML.</h2>
      </header>
      <section className="fresh-video__content">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CC6RIb0aRUg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <p className="fresh-video__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        beatae consequatur dolores impedit inventore provident voluptatibus.
        Cumque deleniti eius eveniet illo ipsum magni natus necessitatibus,
        possimus provident quasi repellat, velit.
      </p>
      <a className="fresh-video__link main-link" href="#">
        На канал
      </a>
      <div className="fresh-article__tags">
        <a className="fresh-article__tag tag" href="#" rel="tag">
          Jamstack
        </a>
        <a className="fresh-article__tag tag" href="#" rel="tag">
          Jamstack
        </a>
        <a className="fresh-article__tag tag" href="#" rel="tag">
          Jamstack
        </a>
        <a className="fresh-article__tag tag" href="#" rel="tag">
          Jamstack
        </a>
      </div>
    </article>
  );
};

export default FreshVideo;
