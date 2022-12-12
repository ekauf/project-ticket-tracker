import "./Tile.scss";
import { useState } from "react";

const Tile = ({ name, role, id }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="tile">
      <div className="tile__content">
        <h3 className="tile__name">{name}</h3>
        <p className="tile__role">{role}</p>
        <div className="tile__ticket">
          <h4>Tickets</h4>
          <div className="tile__buttons">
            <button onClick={handleDecrement}>-</button>
            <h5>{counter}</h5>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
