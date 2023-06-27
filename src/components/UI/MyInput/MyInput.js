import React from 'react';
import css from './myInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input {...props} className={css.myInput + ' ' + props.className} ref={ref} />
    );
});

export default MyInput;
