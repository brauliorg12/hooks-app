import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  // Uso de customHooks
  // useCounter: Contador
  const { counter, decrement, increment } = useCounter(1);
  // useFetch: Petición a la API
  const { data, isLoading } = useFetch(
    'https://pokeapi.co/api/v2/pokemon/' + counter
  );

  return (
    <>
      <h2 className="mb-4">Información de Pokemón Multi:</h2>
      <h2>{data?.name}</h2>
      <button
        className="btn btn-primary mt-2"
        onClick={decrement}
        disabled={counter <= 1}
      >
        Anterior
      </button>
      &nbsp;
      <button className="btn btn-primary mt-2" onClick={increment}>
        Siguiente
      </button>
      <br />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
            data.sprites.back_shiny,
          ]}
        />
      )}
      {/* <pre>{data ? JSON.stringify(data, null, 2) : null}</pre> */}

      <hr />
    </>
  );
};
