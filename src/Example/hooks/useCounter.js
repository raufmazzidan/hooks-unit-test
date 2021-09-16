import { useState } from "react"

const useCounter = () => {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);

  return {
    count,
    minus,
    plus
  }
}

export default useCounter