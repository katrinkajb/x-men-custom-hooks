export const getCharacters = async (page) => {
    const res = await fetch(`https://xmenapiheroku.herokuapp.com/api/characters?page=${page}`);

    const { results } = await res.json();

    return results;
}

