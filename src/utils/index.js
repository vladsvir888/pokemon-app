export const getApiData = async (url) => {
    const response = await fetch(url);
    
    return await response.json();
}

/**
 * Получаем покемонов
 * @param {Array} pokemons - массив объектов, где каждый объект содержит url для запроса конкретного покемона
 */
export const getApiPokemons = pokemons => {
    return Promise.all(pokemons.map(pokemon => {
        return fetch(pokemon.url).then(response => response.json());
    }));
}