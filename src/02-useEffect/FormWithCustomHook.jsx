import { useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  const { onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });


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
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="ejemplo@gmail.com"
        name="email"
        autoComplete="off"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        autoComplete="off"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Reset
      </button>
      {/* </form> */}

      {username === '123' && <Message />}

      <hr />
    </>
  );
};
