import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
    <ul aria-label='characterList'>
        {characters.map((character) => (
            <li key={character.name}>
                <Character {...character} />
            </li>
        ))}
    </ul>
);

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            alias: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            affiliation: PropTypes.string.isRequired,
            powers: PropTypes.string.isRequired
            // powers: PropTypes.arrayOf(
            //     PropTypes.string.isRequired
            // )
        })
    )
}

export default CharacterList;
