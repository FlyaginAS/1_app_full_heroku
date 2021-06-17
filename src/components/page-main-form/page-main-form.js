import React from 'react';
import './page-main-form.scss';
import { connect } from 'react-redux';
import { sortbyChange } from '../../actions';

const PageMainForm = ({ count, sortBy, sortbyChange }) => {
  return (
    <React.Fragment>
      <div className="page-main-form__count">{count} по данной теме</div>
      <div className="page-main-form__radio-group">
        <input
          onChange={(evt) => {
            sortbyChange(evt.target.value);
          }}
          className="page-main-form__input"
          type="radio"
          id="fresh"
          value="fresh"
          name="sort"
          checked={sortBy === 'fresh'}
        />
        <label className="page-main-form__label" htmlFor="fresh">
          <span className="page-main-form__radio-button"> </span>
          Свежие
        </label>
      </div>
      <div className="page-main-form__radio-group">
        <input
          onChange={(evt) => {
            sortbyChange(evt.target.value);
          }}
          className="page-main-form__input"
          type="radio"
          value="views"
          id="popular"
          name="sort"
          checked={sortBy === 'views'}
        />
        <label className="page-main-form__label" htmlFor="popular">
          <span className="page-main-form__radio-button"> </span>
          Популярные
        </label>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ miniCards: { count, sortBy } }) => {
  return {
    count,
    sortBy,
  };
};
const mapDispatchToProps = {
  sortbyChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageMainForm);
