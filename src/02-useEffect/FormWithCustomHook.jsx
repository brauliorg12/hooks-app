import { useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const [formState, handleInputChange, handleResetForm] = useForm({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formState;

  // Se dispara cuando el username del form cambia
  useEffect(() => {
    console.log('username change');
  }, [username]);

  // Se dispara cuando el email del form cambia
  useEffect(() => {
    console.log('email change');
  }, [email]);

  // Se dispara cuando el email del form cambia
  useEffect(() => {
    console.log('password change');
  }, [password]);

  return (
    <>
      <h2>Formulario con Custom Hook</h2>

      {/* <form> */}
      <input
        type="text"
        className="form-control"
        placeholder="Nombre de Usuario"
        name="username"
        autoComplete="off"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="ejemplo@gmail.com"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        autoComplete="off"
        value={password}
        onChange={handleInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={handleResetForm}>
        Reset
      </button>
      {/* </form> */}

      {username === '123' && <Message />}

      <hr />
    </>
  );
};
