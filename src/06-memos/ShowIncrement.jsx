import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volvi a generar :(');
  // Este componente se vuelve a generar cada vez que se renderiza el padre
    
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5); // Incrementa el valor en 5
      }}
    >
      Incrementar
    </button>
  );
});
