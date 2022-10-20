import React from 'react';
import { API_POKEMON } from '../../../constants';

import GoBack from '../../GoBack';
import UIButton from '../../UI/UIButton';

import styles from './NavBar.module.css';

const NavBar = ({
    getData,
    prevPage,
    nextPage,
    offset,
    setOffset
}) => {
    const handleChangePrev = () => {
        setOffset(offset - 50);
        getData(API_POKEMON + `&offset=${offset}`);
    };

    const handleChangeNext = () => {
        setOffset(offset + 50);
        getData(API_POKEMON + `&offset=${offset}`);
    }

    return (
        <div className={styles.navbar}>
            <GoBack />
            <div className={styles.navbar__btns}>
                <UIButton
                    className={styles.navbar__btn}
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                >
                    <span>Previous</span>
                </UIButton>
                <UIButton
                    className={styles.navbar__btn}
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                >
                    <span>Next</span>
                </UIButton>
            </div>
        </div>
    );
};

export default NavBar;