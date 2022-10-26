import React from 'react';

import styles from './UIInput.module.css';

const UIInput = (props) => {
    return (
        <input 
            className={styles.input}
            type="text"
            {...props}
        />
    );
};

export default UIInput;