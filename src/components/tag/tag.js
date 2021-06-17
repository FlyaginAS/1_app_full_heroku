import React from 'react';
import './tag.scss';

const Tag = ({ clazz, text }) => {
  return (
    <a className={`${clazz} tag`} href="#" rel="tag">
      {text}
    </a>
  );
};

export default Tag;
