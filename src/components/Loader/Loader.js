import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Loader.module.css';

const LoaderComponent = () => {
  return (
    <div className={style.loader}>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={4000} // 3 secs
      />
    </div>
  );
};

export default LoaderComponent;
