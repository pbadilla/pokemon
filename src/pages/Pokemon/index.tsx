import React, { useState, useEffect, SVGProps, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

import api from '~/services/api';

import * as SC from './styles';

interface RouteParams {
  name: string;
}

export interface PokemonTypesProps {
  name?: string;
  icon: SVGProps<SVGSVGElement>;
  color: string;
}

export interface PokemonProps {
  id: number;
  number: string;
  image: string;
  specie: string;
  height: string;
  weight: string;
}

const Pokemon: React.FC = () => {
  const { colors } = useTheme();
  const { name } = useParams() as RouteParams;

  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const {
        id,
        weight,
        height,
        sprites,
        species,
      } = response.data;

      setPokemon({
        id,
        number: `#${'000'.substr(id.toString().length)}${id}`,
        image:
          sprites.other['official-artwork'].front_default ||
          sprites.front_default,
        weight: `${weight / 10} kg`,
        specie: species.name,
        height: `${height / 10} m`,
      });
    });
  }, [name]);

  return (
    <SC.Container>
      <SC.GoBack to="/"><FaChevronLeft size={50} /></SC.GoBack>
      <h1>{name}</h1>
      <SC.Content>
        <img src={pokemon.image} alt={`Pokemon -  ${name}`} />
      </SC.Content>
    </SC.Container>
  )
};

export default Pokemon;
