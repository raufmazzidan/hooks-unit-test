import { renderHook, act } from '@testing-library/react-hooks'
import useCounter from './useCounter'

test('counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.plus()
  })

  expect(result.current.count).toBe(1)

  act(() => {
    result.current.minus()
  })

  expect(result.current.count).toBe(0)
})