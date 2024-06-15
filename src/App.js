import logo from "./images/logo.png";
import "./App.css";
import InterestAreas from "./components/InterestAreas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
      </header>
      <InterestAreas></InterestAreas>
    </div>
  );
}

export default App;
