import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  // Se dispara cuando el username del form cambia
  useEffect(() => {
    // console.log('username change');
  }, [username]);

  // Se dispara cuando el email del form cambia
  useEffect(() => {
    // console.log('email change');
  }, [email]);

  return (
    <>
      <h2>Simple Form</h2>

      {/* <form> */}
      <input
        type="text"
        className="form-control"
        placeholder="User Name"
        name="username"
        autoComplete="off"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-primary mt-2">
        Submit
      </button>
      {/* </form> */}

      {username === '123' && <Message />}

      <hr />
    </>
  );
};
