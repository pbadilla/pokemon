import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import * as SC from './styles';

interface PokemonProps {
  id: string;
  image: string;
}

const CardPokemon: React.FC<{ name: string }> = ({ name }) => {

  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, sprites } = response.data

      setPokemon({
        id,
        image: sprites.other['official-artwork'].front_default,
      });
    });
  }, [name]);

  return (
    <SC.Container to={`pokemon/${name}`}>
      <SC.Pokemon>
        {pokemon.image && (
          <img alt={`Pokemon ${name}`} src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
        )}
        <SC.PokemonName>{name}</SC.PokemonName>
      </SC.Pokemon>
    </SC.Container>
  );
};

export default CardPokemon;
