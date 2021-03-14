import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ changePage }) => (
  <div className={style.ButtonWrapper}>
    <button onClick={changePage} type="button" className={style.Button}>
      Load More
    </button>
  </div>
);

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;
