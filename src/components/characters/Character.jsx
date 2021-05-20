import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, alias, powers, img, affiliation }) => (
    <figure>
        <img src={img} alt={name} />
        <figcaption>
            <h2>{name}</h2>
            <p>Also known as {alias}</p>
            <p>Powers: {powers}
                {/* {powers.map((power) => (
                <li key={`${power}`}>{power}
                </li>
            ))} */}
            </p>
            <p>Affiliation: {affiliation}</p>
        </figcaption>
    </figure>
);

Character.propTypes = {
    name: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    powers: PropTypes.string.isRequired
    // powers: PropTypes.arrayOf(
    //     PropTypes.string.isRequired
    // )
}

export default Character;
