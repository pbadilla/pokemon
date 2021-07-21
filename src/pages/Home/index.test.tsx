import React from 'react';
import { render, screen } from '@testing-library/react';
import Home './index';

describe('when HOME is loaded', () => {
  it('HOME container id is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-home')).toBe(1);
  })
});

describe('when HOME is loaded', () => {
  it('HEADER container id is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-header')).toBe(1);
  })
});

describe('when HOME is loaded', () => {
  it('TOGGLEBUTTON container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-togglebutton')).toBe(1);
  })
});

describe('when HOME is loaded', () => {
  it('LOAD MORE BUTTON container is display', () => {
    render(<Home />)
    expect(screen.getByTestId('test-load-button')).toBe(1);
  })
});
