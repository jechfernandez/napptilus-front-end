import { useState } from "react";

const useCart = () => {
  const [value, setValue] = useState(1);

  const setCount = (state) => {
    setValue(state);
  };

  return { count: value, setCount };
};

export default useCart;
