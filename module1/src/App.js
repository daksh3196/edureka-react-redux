import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <Welcome name="React, Redux" />
      <HomePage name="Daksh" />
    </div>
  );
}

export default App;
