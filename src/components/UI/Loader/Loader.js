import React from 'react';
import { LoaderIcon } from './icons/LoaderIcon';
import css from './loader.module.css';

const Loader = ({...props}) => {
    return (
        <div style={{width: props.width + 'px', height: props.height + 'px'}} className={css.loader}>
          <LoaderIcon {...props}/>
        </div>
    );
};

export default Loader;
