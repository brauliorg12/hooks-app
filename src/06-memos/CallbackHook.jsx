import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);

  // Sirve para memorizar funciones
  // Se usa cuando se pasa una funcion a un componente hijo (que utilice React.memo)
  const incrementFn = useCallback((incrementValue) => {
    setcounter((value) => value + incrementValue);
  }, []);

  useEffect(() => {
    // incrementFn();
  }, [incrementFn]);
  return (
    <>
      <h2 className="mb-4">useCallback Hook: {counter}</h2>

      <ShowIncrement increment={incrementFn} />

      <hr />
    </>
  );
};
