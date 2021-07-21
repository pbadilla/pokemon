import React from 'react';
import { render } from '@testing-library/react';
import CardPokemon from './index';

describe('when CardPokemon receive a TEXT parameter as name', () => {
  it('TEXT is Pokemon {name_pokemon}', () => {
    render(<CardPokemon name='TEST' />)
    expect(screen.getByTestId('Pokemon TEST')).toBe(1);
  })
});

describe('when CardPokemon receive a TEXT parameter as name', () => {
  it('IMAGE is loaded', () => {
    render(<CardPokemon name='TEST' />)
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("pokemondb");
  })
});

describe('when CardPokemon NOT receive a TEXT parameter as name', () => {
  it('TEXT is Pokemon {name_pokemon}', () => {
    render(<CardPokemon name='TEST' />)
    expect(screen.getByTestId('Pokemon name_Pokemon')).toBe(1);
  })
});
