import React, { useEffect, useState } from 'react';

import ErrorPage from '../ErrorPage';

import NavBar from '../../components/OverviewPage/NavBar';
import ListPokemons from '../../components/OverviewPage/ListPokemons/ListPokemons';
import UILoader from '../../components/UI/UILoader';
import UITitle from '../../components/UI/UITitle';

import { API_POKEMON } from '../../constants';

import { getApiData, getApiPokemons } from '../../utils';

import { useFetching } from '../../hooks';

const OverviewPage = () => {
    const [pokemons, setPokemons] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [offset, setOffset] = useState(0);

    const [getData, isLoadingData, errorData] = useFetching(async (url) => {
        const res = await getApiData(url);

        const arr = (await getApiPokemons(res.results)).map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                img: pokemon.sprites.front_default
            }
        });

        setPokemons(arr);
        setPrevPage(res.previous);
        setNextPage(res.next);
    });

    useEffect(() => {
        getData(API_POKEMON + `&offset=${offset}`);
    }, [offset]);

    if (errorData) {
        return (
            <ErrorPage 
                text={errorData} 
                isImg={false} 
            />
        )
    }

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
                <section className="main__section">
                    <UITitle text="Overview" />
                    {isLoadingData
                        ? <UILoader />
                        : <ListPokemons pokemons={pokemons} />
                    }
                </section>
            </div>
        </main>
    );
};

export default OverviewPage;