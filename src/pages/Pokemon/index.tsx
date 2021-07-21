import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useTheme } from 'styled-components';

import api from '~/services/api';

import * as SC from './styles';

interface RouteParams {
  name: string;
}


export interface PokemonAbilities {
  [index:number]: string;
}

export interface PokemonProps {
  id: number;
  specie: string;
  height: string;
  weight: string;
  abilities: PokemonAbilities;
}

const Pokemon: React.FC = () => {
  const { name } = useParams() as RouteParams;

  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const {
        id,
        weight,
        height,
        species,
        abilities,
      } = response.data;

      setPokemon({
        id,
        weight: `${weight / 10} kg`,
        specie: species.name,
        height: `${height / 10} m`,
        abilities,
      });
    });
  }, [name]);

  const { id, specie, height, abilities } = pokemon;
  return (
    <SC.Container>
      <SC.GoBack to="/pokemon" data-testid="test-go-back"><span>X</span></SC.GoBack>
      <SC.Content>
        <img data-testid="test-image" alt={`Pokemon ${name}`} src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`} />
        <h1 data-testid="test-name">{name}</h1>
      </SC.Content>
      <SC.ContentXtras>
          <ul>
            <li>ID: <span data-testid="test-id">{id}</span> </li>
            <li>Type: <span data-testid="test-specie">{specie}</span></li>
            <li>Height: <span data-testid="test-height">{height}</span></li>
            <li>Habilities: 
              <ul data-testid="test-abilities">
              { abilities
                ? ( Object.values(abilities).map((item) => <li>{item.ability.name}</li>))
                : ''
              }
              </ul>
            </li>
          </ul>
        </SC.ContentXtras>
    </SC.Container>
  )
};

export default Pokemon;
