import React from 'react';

import styles from './UILoader.module.css';

const UILoader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__inner}></div>
            <small className={styles.loader__text}>
                Loading in progress...
            </small>
        </div>
    );
};

export default UILoader;