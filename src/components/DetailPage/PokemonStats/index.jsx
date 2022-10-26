import React from 'react';

import styles from './PokemonStats.module.css';

const PokemonStats = ({ title, stats }) => {
    return (
        <>
            <h2 className={styles.title}>
                {title}
            </h2>
            <ul className={styles.list}>
                {stats?.map(item => 
                    <li className={styles.item} key={item.name}>
                        <h3 className={styles.name}>
                            {item.name}
                        </h3>
                        <div className={styles.item__inner}>
                            <span>{item.stat}</span>
                            <div className={styles.item__graph} style={{width: item.stat + 'px', backgroundColor: item.color}}>
                                <span className="visually-hidden">
                                    Stat in percent
                                </span>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
};

export default PokemonStats;