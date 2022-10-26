import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import ErrorPage from 'pages/ErrorPage';

import BasicPokemonInfo from 'components/DetailPage/BasicPokemonInfo';
import PokemonStats from 'components/DetailPage/PokemonStats';
import GoBack from 'components/GoBack';
import UILoader from 'components/UI/UILoader';
import UITitle from 'components/UI/UITitle';

import { API } from 'constants';

import { getApiData } from 'utils';

import { useFetching } from 'hooks';

import styles from './DetailPage.module.css';

const DetailPage = () => {
    const [pokemonName, setPokemonName] = useState(null);
    const [pokemonImg, setPokemonImg] = useState(null);
    const [basicPokemonInfo, setBasicPokemonInfo] = useState(null);
    const [pokemonStats, setPokemonStats] = useState(null);

    const { id } = useParams();

    const [getData, isLoadingData, errorData] = useFetching(async (url) => {
        const res = await getApiData(url);

        const statsArr = res.stats.map(item => {
            let color;
    
            if (item.base_stat < 50) {
                color = 'green';
            } else if (item.base_stat < 75) {
                color = 'orange'
            } else {
                color = 'red';
            }
        
            return {
                name: item.stat.name,
                stat: item.base_stat,
                color
            }
        });
    
        setPokemonName(res.name);
        setPokemonImg(res.sprites.front_default);
        setBasicPokemonInfo([
            { title: "Height", data: res.height },
            { title: "Weight", data: res.weight },
            { title: "Experience", data: res.base_experience },
            { title: "Abilities", data: res.abilities.map(ability => ability.ability.name).join(', ') }
        ]);
        setPokemonStats(statsArr);
    })

    useEffect(() => {
        getData(`${API}/${id}`);
    }, []);

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
                <GoBack classes={styles.main__back} />
                <section className="main__section">
                    <UITitle text={pokemonName} />
                    <div className={styles.main__inner}>
                        <div className={styles.main__item}>
                            {isLoadingData
                                ? <UILoader />
                                : <BasicPokemonInfo 
                                    title="Basic Information" 
                                    info={basicPokemonInfo} 
                                    img={pokemonImg} 
                                />
                            }
                        </div>
                        <div className={styles.main__item}>
                            {isLoadingData
                                ? <UILoader />
                                : <PokemonStats 
                                    title="Statistics" 
                                    stats={pokemonStats} 
                                />
                            }
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default DetailPage;