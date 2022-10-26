import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";

import ErrorPage from 'pages/ErrorPage';

import ListPokemons from 'components/OverviewPage/ListPokemons';
import UILoader from 'components/UI/UILoader';
import UITitle from 'components/UI/UITitle';

import { API, LIMIT } from 'constants';

import { getApiData, getApiPokemons } from 'utils';

import { useFetching } from 'hooks';

const OverviewPage = () => {
    const [pokemons, setPokemons] = useState(null);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(20);
    const [pageCount] = useState(Math.ceil(LIMIT / perPage));

    const [getData, isLoadingData, errorData] = useFetching(async (url) => {
        const res = await getApiData(url);

        const arr = (await getApiPokemons(res.results)).map(pokemon => {
            return {
                name: pokemon.name,
                img: pokemon.sprites.front_default
            }
        })

        setPokemons(arr);
    });

    const handlePageClick = (e) => {
        const selectedPage = e.selected;

        setOffset(selectedPage * perPage);
    };

    useEffect(() => {
        getData(`${API}?limit=${perPage}&offset=${offset}`);
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
                <section className="main__section">
                    <UITitle text="Overview" />
                    {isLoadingData
                        ? <UILoader />
                        : <ListPokemons pokemons={pokemons} />
                    }
                </section>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                />
            </div>
        </main>
    );
};

export default OverviewPage;