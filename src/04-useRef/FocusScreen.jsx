import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h2 className="mb-4">Focus Screen</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre de pokemón"
        className="form-control"
        autoFocus
      />

      <button className="btn btn-primary mt-2" onClick={handleClick}>
        Set Focus
      </button>

      <hr />
    </>
  );
};
