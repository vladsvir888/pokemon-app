import React from 'react';

import cn from 'classnames';

import styles from './UIButton.module.css';

const UIButton = ({children, ...props}) => {
    return (
        <button {...props} className={cn(styles.btn, props.className)}>
            {children}
        </button>
    );
};

export default UIButton;