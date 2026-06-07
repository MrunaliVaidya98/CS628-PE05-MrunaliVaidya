import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
