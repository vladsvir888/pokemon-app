import React from 'react';
import { Link } from 'react-router-dom';

import UIImg from 'components/UI/UIImg';

import styles from './ListPokemons.module.css';

const List = ({ pokemons }) => {
    return (
        <ul className={styles.list}>
            {pokemons?.map(pokemon =>
                <li className={styles.item} key={pokemon.name}>
                    <UIImg
                        className={styles.img}
                        width="96"
                        height="96"
                        src={pokemon.img}
                        alt={pokemon.name}
                    />
                    <h2 className={styles.heading}>
                        <Link className={styles.link} to={`/pokemon/${pokemon.name}`}>
                            {pokemon.name}
                        </Link>
                    </h2>
                </li>
            )}
        </ul>
    );
};

export default List;