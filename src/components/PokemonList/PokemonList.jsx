import React from 'react';

import GoBack from '../GoBack';

import styles from './PokemonList.module.css';

const PokemonList = ({ pokemons }) => {
    return (
        <main className="main">
            <div className="container">
                <GoBack />
                <div className={styles.main__inner}>
                    <h1 className={styles.main__title}>
                        Browse By Image
                    </h1>
                    <ul className={styles.main__list}>
                        {pokemons?.map(pokemon =>
                            <li className={styles.main__item} key={pokemon.name}>
                                <img src={pokemon.img} alt={pokemon.name} />
                                <h2 className={styles.main__heading}>{pokemon.name}</h2>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default PokemonList;