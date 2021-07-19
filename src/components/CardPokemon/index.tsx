import React, { useState, useEffect, SVGProps } from 'react';
import { useTheme } from 'styled-components';

import api from '~/services/api';

import * as SC from './styles';

interface PokemonTypesProps {
  name: string;
  color: string;
  icon: SVGProps<SVGSVGElement>;
}

interface PokemonProps {
  id: string;
  image: string;
}

const CardPokemon: React.FC<{ name: string }> = ({ name }) => {
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, types, sprites } = response.data

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
          <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
        )}
        <SC.PokemonName>{name}</SC.PokemonName>
      </SC.Pokemon>
    </SC.Container>
  );
};

export default CardPokemon;
