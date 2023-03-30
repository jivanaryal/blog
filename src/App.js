import React from "react";
import HomePage from "./Components/Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Hoc/Layout/Layout";
const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
