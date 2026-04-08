import { useState, useCallback } from "react";

function useLocalStorage(key, initial) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initial;
    } catch (error) {
      console.log(`useLocalStorage: "${key}" okunamadı`, error);
      return initial;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          typeof value === "function" ? value(storedValue) : value;

        setStoredValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.warn(`useLocalStorage: "${key}" yazılamadı`, error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
}

export default useLocalStorage;