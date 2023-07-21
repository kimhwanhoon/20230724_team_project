import { useState, useCallback } from "react";

export const useInput = (initialInput) => {
  
  const [input, setInput] = useState(initialInput);
  
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }));
  }, []);

  const reset = useCallback(() => setInput(initialInput), [initialInput]);

  return [input, onChange, reset];
};