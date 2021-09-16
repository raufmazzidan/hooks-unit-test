import { useState } from "react"

const useCounter = () => {
  const [count, _setCount] = useState(0);

  const setCount = (c) => () => _setCount(c);

  return {
    setCount,
    count
  }
}

export default useCounter