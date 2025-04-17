import { useEffect, useState } from 'react';

const localCache = new Map();

export const useFetch = (url) => {
  useEffect(() => {
    getFetch();
  }, [url]);

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    // Buscar en cache primero
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();

    setState({
      ...state,
      isLoading: true,
    });

    try {
      const response = await fetch(url);
      const data = await response.json();

      // sleep
      await new Promise((resolve) => setTimeout(resolve, 300));

      if (!response.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: response.status,
            message: response.statusText,
          },
        });

        return;
      }

      setState({
        data,
        isLoading: false,
        hasError: false,
        error: null,
      });

      // Manejo de caché
      localCache[url] = data;
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        hasError: error.message,
      });
    }
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
