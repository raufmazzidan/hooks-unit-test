import React from 'react'
import useCounter from './hooks/useCounter'

function Example() {
  const {
    count,
    setCount
  } = useCounter();

  return (
    <div style={{ padding: 16 }}>
      <h2>Counter: {count}</h2>
      <button onClick={setCount(count - 1)}>Kurang</button>
      &nbsp;
      <button onClick={setCount(count + 1)}>Tambah</button>
    </div>
  )
}

export default Example
