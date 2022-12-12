import "./App.scss";
import teamArr from "./data/teamData";
import Tile from "./components/tile/Tile";

const App = () => {
  const teamTileJsx = teamArr.map(({ name, role, id }) => {
    return <Tile key={id} name={name} role={role} />;
  });

  return (
    <div>
      <h1 className="page-heading">Ticket Tracker</h1>
      <main className="tile-container">{teamTileJsx}</main>
    </div>
  );
};

export default App;
