import React from 'react';
import { Link } from "react-router-dom";

import cn from 'classnames';

import UIImg from '../../components/UI/UIImg';

import styles from './ErrorPage.module.css';

import sadPikachuImg from '../../img/sad-pikachu.gif';

const ErrorPage = ({text, isImg = true}) => {
    return (
        <div className={cn("container", styles.error)}>
            <h1 className={styles.error__heading}>
                {text}
            </h1>
            {isImg && 
                <UIImg 
                    className={styles.error__img}
                    width="350"
                    height="200"
                    src={sadPikachuImg}
                    alt="sad pikachu"
                />
            }
            <p className={styles.error__paragraph}>
                Take me back to <Link className={styles.error__link} to="/">Home</Link>
            </p>
        </div>
    );
};

export default ErrorPage;