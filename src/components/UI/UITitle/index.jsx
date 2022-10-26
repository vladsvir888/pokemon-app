import React from 'react';

import styles from './UITitle.module.css';

const UITitle = ({ text }) => {
    return (
        <h1 className={styles.title}>{text}</h1>
    );
};

export default UITitle;