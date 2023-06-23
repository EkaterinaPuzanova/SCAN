import React from 'react';
import css from './logo.module.css';
import Svg from './icons/Svg';

function Logo(props) {
  return (
    <div className={css.logo}>
      <Svg data={props.data} />
  </div>
  )
}

export default Logo;