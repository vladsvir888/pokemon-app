import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import { debounce } from 'lodash';

import ErrorPage from 'pages/ErrorPage';

import UIInput from 'components/UI/UIInput';
import UITitle from 'components/UI/UITitle';
import UILoader from 'components/UI/UILoader';

import { API } from 'constants';

import { getApiData } from 'utils';

import { useFetching } from 'hooks';

import styles from './SearchPage.module.css';

const SearchPage = () => {
    const [pokemons, setPokemons] = useState(null);
    const [query, setQuery] = useState('');

    const [getData, isLoadingData, errorData] = useFetching(async (url) => {
        const res = await getApiData(url);

        setPokemons([...res.results].sort((a, b) => a['name'].localeCompare(b['name'])));
    });

    useEffect(() => {
        getData(API + '?limit=1154');
    }, []);

    const filteredPokemons = useMemo(() => {
        if (!query) {
            return pokemons;
        }

        return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
    }, [pokemons, query])

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
                <section className={cn("main__section", styles.main__section)}>
                    <UITitle text="Search" />
                    {isLoadingData
                        ? <UILoader />
                        : (
                            <>
                                <UIInput 
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search by name..." 
                                />
                                {filteredPokemons?.length !== 0
                                    ? (
                                        <ul className={styles.list}>
                                            {filteredPokemons?.map(pokemon => 
                                                <li key={pokemon.name}>
                                                    <Link className={styles.link} to={`/pokemon/${pokemon.name}`}>
                                                        {pokemon.name}
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    )
                                    : <h1>Not found</h1>
                                }
                            </>
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default SearchPage;