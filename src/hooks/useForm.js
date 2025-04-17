import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  //   const [formState, setFormState] = useState({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleResetForm = () => {
    setFormState(initialState);
  };

  return [formState, handleInputChange, handleResetForm];
};
