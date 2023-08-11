import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import NewComponent from "./components/NewComponent";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/NewComponent"
          element={
            <>
              <NewComponent />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
