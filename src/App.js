import NavBar from "./NavBar";
import "./App.css";
import ItemListContainer from "./ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Bienvenidos" />
    </div>
  );
}

export default App;
