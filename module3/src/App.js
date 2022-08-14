import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import AppRouter from "./Router/AppRouter";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AppRouter />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
