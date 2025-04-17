import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <>
      <h2 className="mb-4">
        Memorize Counter: <Small value={counter} />
      </h2>

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
