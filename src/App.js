import "./App.css"
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Home from "./Home";
import Pagination from "./Components/Pagination";
import ContributorPagination from "./Components/ContributorPagination";
import Complain from "./Components/Complain";

function App() {

  return (
    <div style={{ "overflowX": "hidden" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/reports" element={<Pagination />} />
        <Route path="/contributors" element={<ContributorPagination />} />
        <Route path="/complain" element={<Complain />} />
      </Routes>

    </div>
  );
}

export default App;

/*

*/