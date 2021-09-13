import { useCallback, useState } from "react";

export const useForm = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(e => {
    setter((prevState) => ({ ...prevState, [`${e.target.name}`]: e.target.value }));
  }, []);
  return [value, handler];
};