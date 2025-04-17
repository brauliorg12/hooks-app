import { useCounter } from '../hooks/useCounter';

export const CounterWidthCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <h2 className="mb-4">
        Counter Width Custom Hook: <strong>{counter}</strong>
      </h2>
      <button onClick={decrement} className="btn btn-primary">
        -1
      </button>
      &nbsp;
      <button onClick={reset} className="btn btn-primary mr-1">
        Reset
      </button>
      &nbsp;
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <hr />
    </>
  );
};
