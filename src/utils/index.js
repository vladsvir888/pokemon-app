/**
 * Получаем данные от api
 * @param {String} url 
 */
export const getApiData = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log(response.ok)
            return false;
        }

        return await response.json();
    } catch (error) {
        console.log(error.message);
        return false;
    }
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