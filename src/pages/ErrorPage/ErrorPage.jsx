import React from 'react';
import { Link } from "react-router-dom";

import cn from 'classnames';

import styles from './ErrorPage.module.css';

import sadPikachuImg from '../../img/sad-pikachu.gif';

const ErrorPage = () => {
    return (
        <div className={cn("container", styles.error)}>
            <h1 className={styles.error__heading}>404</h1>
            <img className={styles.error__img} src={sadPikachuImg} alt="sad pikachu" />
            <p className={styles.error__paragraph}>
                Take me back to <Link className={styles.error__link} to="/">Home</Link>
            </p>
        </div>
    );
};

export default ErrorPage;