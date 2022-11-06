import "./App.css";
import Topbar from "./componentes/Topbar";
import Bottombar from "./componentes/Bottombar";
import PokeList from "./componentes/PokeList";

function App() {
  return (
    <>
      <Topbar />
      <PokeList />
      <Bottombar />
    </>
  );
}

export default App;
