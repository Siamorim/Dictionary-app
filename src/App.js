import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dictionary from "./Dictionary.js";
import logo from "./booklightcolor.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} alt="Woman and books" className="img-fluid logo" />
        <div className="App-header">Dictionary</div>
        <Dictionary defaultKeyword="sunset" />
      </div>
      <footer className="code">
        <span>This project was coded by </span>
        <a
          href="https://www.linkedin.com/in/s%C3%ADlvia-amorim-6220a053/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Sílvia Amorim
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Siamorim/Dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://elegant-visvesvaraya-fa6260.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
