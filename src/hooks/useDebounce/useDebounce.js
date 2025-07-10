import { useRef } from 'react';

export function useDebounce(fnc, ms = 300) {
  const timer = useRef();

  return (...args) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      fnc?.(...args);
    }, ms);
  };
}
