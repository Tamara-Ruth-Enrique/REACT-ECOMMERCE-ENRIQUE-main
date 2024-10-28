import { Button } from "@mui/material";
import "./Counter.css";
import PropTypes from "prop-types";

const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div
      className="counter-buttons "
      style={{ margin: "10px", display: "flex", gap: "10px" }}
    >
      <div>
        <Button variant="contained" onClick={restar}>
          -
        </Button>
      </div>
      <h1>{contador}</h1>
      <div>
        <Button variant="contained" onClick={sumar}>
          +
        </Button>
      </div>

      <div>
        <Button
          variant="outlined"
          onClick={() => {
            onAdd(contador);
          }}
        >
          AGREGAR AL CARRITO
        </Button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  contador: PropTypes.number.isRequired,
  sumar: PropTypes.func.isRequired,
  restar: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Counter;
