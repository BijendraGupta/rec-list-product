import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductRec from "./components/ProductRec";
export default function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/productTile"
            element={<ProductRec></ProductRec>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
