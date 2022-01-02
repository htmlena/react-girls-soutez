import "./App.css";
import CountryGenerator from "./components/CountryGenerator/CountryGenerator";
import Sound from "./components/Sound/Sound";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <CountryGenerator />
        <Sound />
      </main>
    </div>
  );
}

export default App;
