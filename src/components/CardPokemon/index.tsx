import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import Loader from "react-loader-spinner";

import * as SC from './styles';

interface PokemonProps {
  id: string;
  image: string;
}

const CardPokemon: React.FC<{ name: string }> = ({ name = 'name_Pokemon' }) => {

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
        {pokemon.image
        ? (
          <img data-testid={`Pokemon ${name}`} alt={`Pokemon ${name}`} src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
        )
        : <Loader type="Rings" color="#db221c" height={80} width={80} timeout={3000} />
        }
        <SC.PokemonName>{name}</SC.PokemonName>
      </SC.Pokemon>
    </SC.Container>
  );
};

export default CardPokemon;
