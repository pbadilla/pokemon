import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ToggleButton from './'
import '@testing-library/jest-dom/extend-expect'

describe('when click on TOGGLEBUTTON', () => {
    it('THEME change', () => {
      const { getByTestId } = render(<ToggleButton />)
      const toggleBtn = getByTestId('toggleButton')
      fireEvent.click(toggleBtn)
      expect(getByTestId('home')).toHaveStyle('background-color: #E2E2E2')
      fireEvent.click(toggleBtn)
      expect(getByTestId('home')).toHaveStyle('background-color: #FFF')
    })
  })