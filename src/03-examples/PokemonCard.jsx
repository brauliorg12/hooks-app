import { useRef, useState } from 'react';
import { useLayoutEffect } from 'react';

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0 });

  useLayoutEffect(() => {
    const widthRef = h2Ref.current.getBoundingClientRect().width;
    console.log(widthRef);
    setBoxSize({ width: widthRef });
    console.log(boxSize);
  }, [name]);

  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Imagenes */}
      <div>
        {sprites.map((sprite, index) => (
          <img
            key={index}
            src={sprite}
            alt={name}
            className="img-thumbnail me-2"
            style={{ width: '100px', height: '100px' }}
          />
        ))}
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};
