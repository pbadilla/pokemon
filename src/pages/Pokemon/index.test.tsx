import React from 'react';
import { render, screen } from '@testing-library/react';
import Home './index';

describe('when POKEMON CARD is loaded', () => {
  it('GO BACK container id is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-go-back')).toBe(1);
  })
});

describe('when POKEMON CARD is loaded', () => {
  it('IMAGE container id is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-image')).toBe(1);
  })
});

describe('when POKEMON CARD is loaded', () => {
  it('NAME container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-name')).toBe(1);
  })
});

describe('when POKEMON CARD is loaded', () => {
  it('ID container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-id')).toBe(1);
  })
});

describe('when POKEMON CARD is loaded', () => {
  it('SPECIE container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-specie')).toBe(1);
  })
});

describe('when POKEMON CARD is loaded', () => {
  it('HEIGHT container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-height')).toBe(1);
  })
});

describe('when POKEMON CARD is loaded', () => {
  it('ABILITIES container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-abilities')).toBe(1);
  })
});
