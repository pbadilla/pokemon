import React, { useState, useEffect, useCallback } from 'react';

import CardPokemon from '~/components/CardPokemon';
import InputSearch from '~/components/InputSearch';
import Header from '~/components/Header';

import api from '~/services/api';

import * as SC from './styles';

interface PokemonProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 20;
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);
  const [totalPokemons, setTotalPokemons] = useState(null);

  // search
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

    if (isSearch) handleSearchPokemons();
    else handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  // AAdd new Pokemons
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

  console.log("totalPokemons", totalPokemons);

  return (
    <SC.Container>
      <Header />
      <SC.SubTitle>
        <span>Generation I</span>
        <span>{totalPokemons !== null && totalPokemons} pokemons</span>
      </SC.SubTitle>
      <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />
      <SC.Pokemons>
        {pokemons.map(pokemon => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </SC.Pokemons>
      {pokemonSearch.length <= 2 && (
        <button
          type="button"
          onClick={() => handleMorePokemons(pokemonsOffsetApi)}
        >
          Load more
        </button>
      )}
    </SC.Container>
  );
};

export default Home;
