import React from 'react';

import UIImg from 'components/UI/UIImg';

import styles from './BasicPokemonInfo.module.css';

const BasicPokemonInfo = ({ 
    title, 
    info, 
    img 
}) => {
    return (
        <>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.inner}>
                <div className={styles.img__wrap}>
                    <UIImg src={img} alt={title} />
                </div>
                <ul className={styles.list}>
                    {info?.map(item => 
                        <li className={styles.item} key={item.title}>
                            <h3 className={styles.item__title}>
                                {item.title}
                            </h3>
                            <p className={styles.item__text}>
                                {item.data}
                            </p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default BasicPokemonInfo;