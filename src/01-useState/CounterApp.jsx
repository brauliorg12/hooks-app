import { useState } from 'react';

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h2>Counter App</h2>
      <p>
        Counter: <strong>{counter1}</strong>{' '}
      </p>
      <p>
        Counter2: <strong>{counter2}</strong>
      </p>
      <p>
        Counter3: <strong>{counter3}</strong>
      </p>

      <button
        className="btn btn-primary mt-4"
        onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
      >
        +1
      </button>

      <hr />
    </>
  );
};
