import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NavBar from "./components/NavBar";
import PageNotFound from "./pages/PageNotFound";
import AddTodoPage from "./pages/AddTodo";
import UpdataTodoPage from "./pages/UpdateTodo";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addtodo" element={<AddTodoPage />} />
          <Route path="/updatetodo" element={<UpdataTodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
