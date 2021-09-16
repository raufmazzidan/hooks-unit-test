import React from 'react'
import useCounter from './hooks/useCounter'

function Example() {
  const {
    count,
    plus,
    minus
  } = useCounter();

  return (
    <div style={{ padding: 16 }}>
      <h2>Counter: {count}</h2>
      <button onClick={minus}>Kurang</button>
      &nbsp;
      <button onClick={plus}>Tambah</button>
    </div>
  )
}

export default Example
