import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputSearch from './'
import '@testing-library/jest-dom/extend-expect'

describe('when INPUTSEARCH receive a value', () => {
    it('UPDATES on change', () => {
      const value = 'picachu'
      const setSearch = jest.fn((value) => {})
      const { queryByPlaceholderText } = render(<InputSearch value={value} onChange={setSearch}/>)
      const searchInput = queryByPlaceholderText('¿Qué pokemon buscas?')
      fireEvent.change(searchInput, { target: { value: value } })
      expect(searchInput.value).toBe('picachu')
    })
  })