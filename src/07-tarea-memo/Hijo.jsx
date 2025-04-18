import { memo } from 'react';

export const Hijo = memo(({ numero, incrementar }) => {
  // console.log('  Me volví a generar :(  ');

  return (
    <>
      <button
        className="btn btn-primary ms-2"
        onClick={() => incrementar(numero)}
      >
        {numero}
      </button>
    </>
  );
});
