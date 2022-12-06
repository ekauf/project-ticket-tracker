import "./Tile.scss";

const Tile = ({ name, role, id }) => {
  return (
    <div className="tile">
      <div className="tile__content">
        <h3 className="tile__name">{name}</h3>
        <p className="tile__role">{role}</p>
        <div className="tile__ticket">
          <p>Counter</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Tile;
