import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi voy');
  }

  return `${iterationNumber} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]); // Only re-calculate when counter changes

  return (
    <>
      <h2 className="mb-4">
        Memo Hook Counter: <small>{counter}</small>
      </h2>

      <h4>{memorizeValue}</h4>

      <button
        className="btn btn-primary"
        onClick={() => increment({ value: 1 })} // Increment the counter by 1
      >
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>

      <hr />
    </>
  );
};
