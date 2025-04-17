import { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(
    () => {
      //   first
      console.log('Message component mounted');

      const onMouseMove = ({ x, y }) => {
        setCoords({ x, y });
      };

      window.addEventListener('mousemove', onMouseMove);

      // Cleanup function
      return () => {
        //   second
        window.removeEventListener('mousemove', onMouseMove);
        // Cleanup function
        console.log('Message component unmounted');
      };
    },
    [
      // third
    ]
  );

  return (
    <>
      <p className="alert alert-danger mt-4">
        <strong>Usuario ya existe </strong>
      </p>
      Coordenadas de mousemouve event: {JSON.stringify(coords)}
    </>
  );
};
