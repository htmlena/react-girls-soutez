import "./App.css";
import CountryGenerator from "./components/CountryGenerator/CountryGenerator";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <CountryGenerator />
        <Button text={"Sound on"} />
      </main>
    </div>
  );
}

export default App;
