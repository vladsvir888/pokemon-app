import React from 'react';
import { useNavigate } from 'react-router';

import styles from './GoBack.module.css';

const GoBack = () => {
    const navigate = useNavigate();

    return (
        <button 
            className={styles.go__back} 
            onClick={() => navigate(-1)}
        >
            <span>Go back</span>
        </button>
    );
};

export default GoBack;