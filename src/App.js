import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">Coded by Sílvia Amorim</footer>
        </small>
      </div>
    </div>
  );
}

export default App;
