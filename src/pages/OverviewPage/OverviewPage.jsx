import React, { useEffect, useState } from 'react';

import PokemonList from '../../components/PokemonList';

import { getApiData, getApiPokemons } from '../../utils';

import { API_POKEMON } from '../../constants';

const OverviewPage = () => {
    const [pokemons, setPokemons] = useState(null);

    const getData = async (url) => {
        const res = await getApiData(url);

        if (res) {
            let arr = (await getApiPokemons(res.results)).map(pokemon => {
                return {
                    name: pokemon.name,
                    img: pokemon.sprites.front_default
                }
            });

            setPokemons(arr);
        } else {
            console.log('ooops');
        }
    }

    useEffect(() => {
        getData(API_POKEMON);
    }, []);

    return (
        <>
            <PokemonList pokemons={pokemons} />
        </>
    );
};

export default OverviewPage;