import "./App.css"
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Home";
import Pagination from "./Components/Pagination"

function App() {

  return (
    <div style={{ "overflowX": "hidden" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/reports" element={<Pagination />} />
      </Routes>
    </div>
  );
}

export default App;

/*

     
*/