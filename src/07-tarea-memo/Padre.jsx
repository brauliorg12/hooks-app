import { Hijo } from './Hijo';
import { useCallback, useState } from 'react';

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementarFn = useCallback((newValue) => {
    setValor((oldValue) => oldValue + newValue);
  }, []);

  return (
    <div>
      <h2>Padre</h2>
      <p>
        {' '}
        Total: <strong>{valor}</strong>{' '}
      </p>

      <small>Hijo</small>
      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementarFn} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
