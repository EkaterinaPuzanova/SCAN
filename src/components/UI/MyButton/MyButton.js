import React from 'react';
import css from './myButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={css.myBtn + ' '+ props.className}>
            {children}
        </button>
    );
};

export default MyButton;
