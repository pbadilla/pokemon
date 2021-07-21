import React, { useState, useEffect, useCallback } from 'react';

import Loader from "react-loader-spinner";

import CardPokemon from '~/components/CardPokemon';
import InputSearch from '~/components/InputSearch';
import Header from '~/components/Header';
import ToggleButton from '~/components/ToggleButton';

import api from '~/services/api';

import * as SC from './styles';

interface PokemonProps {
  id: string;
  name: string;
}

interface ThemeProps {
  theme?: string;
}

const Home: React.FC<ThemeProps> = () => {
  const NUMBER_POKEMONS = 20;
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);
  const [totalPokemons, setTotalPokemons] = useState(null);

  // ToggleButton
  // const [flavor, setFlavor] = useState('light');

  // const themeToggler = () => {
  //   flavor === 'light' ? setFlavor('dark') : setFlavor('light')
  // }

  // Search
  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    // Validation names
    const pokemonsSearch = response.data.results.filter(
      ({ name }: PokemonProps) => name.includes(pokemonSearch),
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  // First load
  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get('/pokemon', {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    setTotalPokemons(response.data.count);
    setPokemons(response.data.results);
  }, []);

  useEffect(() => {
    // 2 charachers to search
    const isSearch = pokemonSearch.length >= 2;
    isSearch ? handleSearchPokemons() : handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  // Add new Pokemons
  const handleMorePokemons = useCallback(
    async offset => {
      const response = await api.get(`/pokemon`, {
        params: {
          limit: NUMBER_POKEMONS,
          offset,
        },
      });
      setPokemons(state => [...state, ...response.data.results]);
      setPokemonsOffsetApi(state => state + NUMBER_POKEMONS);
    },
    [NUMBER_POKEMONS],
  );

  return (
    <SC.Container data-testid="test-home">
      <Header data-testid="test-header"/>
      <SC.SubTitle>
        <span>Generation I</span>
        <span>{totalPokemons !== null && totalPokemons} pokemons</span>
      </SC.SubTitle>
      <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />
      <SC.ToggleButton>
        <ToggleButton data-testid="test-togglebutton" />
      </SC.ToggleButton>
      { pokemons.length > 0
        ? (
          <SC.Pokemons>
          {pokemons.map(pokemon => (
            <CardPokemon key={pokemon.name} name={pokemon.name} data-testid="test-cards" />
          ))}
        </SC.Pokemons>
        )
        : (
          <SC.Loader>
            <Loader type="Rings" color="#db221c" height={80} width={80} timeout={3000} />
          </SC.Loader>
        )
      }
      
      {pokemonSearch.length <= 2 && (
        <button
          type="button"
          onClick={() => handleMorePokemons(pokemonsOffsetApi)}
          data-testid="test-load-button"
        >
          Load more
        </button>
      )}
    </SC.Container>
  );
};  

export default Home;
