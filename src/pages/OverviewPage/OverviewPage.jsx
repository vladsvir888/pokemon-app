import React, { useEffect, useState } from 'react';

import ErrorPage from '../ErrorPage';

import ListPokemons from '../../components/OverviewPage/ListPokemons/ListPokemons';
import UILoader from '../../components/UI/UILoader';
import UITitle from '../../components/UI/UITitle';

import { API } from '../../constants';

import { getApiData, getApiPokemons } from '../../utils';

import { useFetching } from '../../hooks';

import ReactPaginate from "react-paginate";

const OverviewPage = () => {
    const [pokemons, setPokemons] = useState(null);
    const [offset, setOffset] = useState(0);
    const [perPage] = useState(20);
    const [pageCount, setPageCount] = useState(0);

    const [getData, isLoadingData, errorData] = useFetching(async (url) => {
        const res = await getApiData(url);

        const arr = (await getApiPokemons(res.results)).map(pokemon => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                img: pokemon.sprites.front_default
            }
        }).slice(offset, offset + perPage);

        setPokemons(arr);
        setPageCount(Math.round(res.count / perPage));
    });

    const handlePageClick = (e) => {
        const selectedPage = e.selected;

        setOffset(selectedPage * perPage);
    };

    useEffect(() => {
        getData(API + '?limit=1154');
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