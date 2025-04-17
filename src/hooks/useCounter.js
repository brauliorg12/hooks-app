import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [counter, setcounter] = useState(initialValue);

  return {
    counter,
    increment: ({value = 1}) => {
      setcounter((c) => c + value);
    },
    decrement: ({value = 1}) => {
      setcounter((c) => c - value);
    },
    reset: () => {
      setcounter(initialValue);
    },
  };
};
