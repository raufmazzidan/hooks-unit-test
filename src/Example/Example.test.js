import '@testing-library/jest-dom'
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Example from './Example'
import useCounter from './hooks/useCounter'

jest.mock('./hooks/useCounter')

test('render', () => {
  const mockCounter = {
    count: 0,
    plus: jest.fn(),
    minus: jest.fn(),
  }

  useCounter.mockReturnValue(mockCounter)

  render(<Example />)

  expect(screen.getByText('Counter: 0')).toBeTruthy()
})


// import '@testing-library/jest-dom'
// import * as React from 'react'
// import { render, fireEvent, screen, act } from '@testing-library/react'
// import Example from './Example'

// test('render', () => {
//   render(<Example />)
//   expect(screen.getByText('Counter: 0')).toBeTruthy()

//   act(() => {
//     fireEvent.click(screen.getByText('Tambah'))
//   })

//   expect(screen.getByText('Counter: 1')).toBeTruthy()

//   act(() => {
//     fireEvent.click(screen.getByText('Kurang'))
//   })

//   expect(screen.getByText('Counter: 0')).toBeTruthy()
// })