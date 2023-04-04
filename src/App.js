import React from "react";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Hoc/Layout/Layout";
import GetSingleItem from "./Components/Pages/HomePage/GetSingleItem";
import Categorys from "./Components/Pages/HomePage/Categorys/Categorys";
const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/item/:id" element={<GetSingleItem />} />
            <Route exact path="/categories" element={<Categorys />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
