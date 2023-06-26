import React from 'react';
import css from './main.module.css';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

function Main() {
  return (
    <main className={css.main}>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  )
}

export default Main;