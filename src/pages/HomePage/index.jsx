import React from 'react';
import { Link } from "react-router-dom";

import UIImg from 'components/UI/UIImg';

import styles from './HomePage.module.css';

import reviewImg from 'img/01.jpg';
import searchImg from 'img/02.jpg';

const HomePage = () => {
    return (
        <main className="main">
            <h1 className="visually-hidden">
                Home Page
            </h1>
            <div className="container">
                <div className={styles.main__block}>
                    <div className={styles.main__item}>
                        <UIImg 
                            className={styles.main__img}
                            width="400"
                            height="400"
                            src={reviewImg}
                            alt=""
                        />
                        <h2 className={styles.main__heading}>
                            <Link className={styles.main__link} to="/pokemon">
                                Pokémon Overview
                            </Link>
                        </h2>
                    </div>
                    <div className={styles.main__item}>
                        <UIImg 
                            className={styles.main__img}
                            width="400"
                            height="400"
                            src={searchImg}
                            alt=""
                        />
                        <h2 className={styles.main__heading}>
                            <Link className={styles.main__link} to="/search">
                                Pokémon Search
                            </Link>
                        </h2>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HomePage;