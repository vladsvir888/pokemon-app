import React from 'react';
import { useNavigate } from 'react-router';

import UIButton from '../UI/UIButton';

import styles from './GoBack.module.css';

const GoBack = () => {
    const navigate = useNavigate();

    return (
        <UIButton 
            className={styles.back}
            onClick={() => navigate(-1)}
        >   
            <svg className={styles.back__icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M980.432 539.568 109.536 539.568 366.128 796.16c10.688 10.688 10.688 28.016 0 38.704-10.688 10.688-28.032 10.688-38.72 0L25.344 532.8c-0.544-0.464-1.248-0.624-1.76-1.136-0.848-0.848-0.848-2.048-1.568-2.976-2.352-2.896-4-6.048-4.992-9.472-0.352-1.328-0.608-2.48-0.752-3.84-1.12-8.192 1.008-16.736 7.296-23.04 0.544-0.544 1.264-0.72 1.84-1.216l301.984-301.984c10.688-10.688 28.016-10.688 38.72 0 10.688 10.688 10.688 28.016 0 38.704L109.536 484.432l870.896 0C995.664 484.432 1008 496.784 1008 512 1008 527.216 995.664 539.568 980.432 539.568z" />
            </svg>
            <span className={styles.back__text}>
                Go back
            </span>
        </UIButton>
    );
};

export default GoBack;