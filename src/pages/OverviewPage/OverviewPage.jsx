import React, { useEffect, useState } from 'react';

import NavBar from '../../components/OverviewPage/NavBar';
import ListPokemons from '../../components/OverviewPage/ListPokemons/ListPokemons';

import { getApiData, getApiPokemons } from '../../utils';

import { API_POKEMON } from '../../constants';

import styles from './OverviewPage.module.css';

const OverviewPage = () => {
    const [pokemons, setPokemons] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [offset, setOffset] = useState(0);

    const getData = async (url) => {        
        const res = await getApiData(url);

        if (res) {
            let arr = (await getApiPokemons(res.results)).map(pokemon => {
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    img: pokemon.sprites.front_default
                }
            });

            setPokemons(arr);
            setPrevPage(res.previous);
            setNextPage(res.next);
        } else {
            console.log('ooops');
        }
    }

    useEffect(() => {
        getData(API_POKEMON + `&offset=${offset}`);
    }, [offset]);

    return (
        <main className="main">
            <div className="container">
                <NavBar 
                    getData={getData}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    offset={offset}
                    setOffset={setOffset}
                />
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>
                        Browse By Image
                    </h1>
                    <ListPokemons 
                        pokemons={pokemons}
                    />
                </div>
            </div>
        </main>
    );
};

export default OverviewPage;