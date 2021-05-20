import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/characters/Loading';
import { getCharacters } from '../services/xmenApi';

const Xmen = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharacters)
      .finally(() => setLoading(false));
  });

  if (loading) return <Loading />

  else return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
};

export default Xmen;
