import React, { useState } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";
const CounterContainer = ({ onAdd, stock }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  let childProps = {
    contador,
    sumar,
    restar,
    onAdd,
  };

  Counter.propTypes = {};

  return <Counter {...childProps} />;
};
export default CounterContainer;
