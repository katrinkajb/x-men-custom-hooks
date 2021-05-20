import { useEffect, useState } from "react";
import { getCharacters } from "../services/xmenApi";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then((characters) => setCharacters(characters));
    }, []);

    return characters;
};
