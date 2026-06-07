import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError("Unable to load recipes. Please make sure the backend is running.");
      }
    }
    getRecipes();
  }, []);

  async function deleteRecipe(id) {
    if (!window.confirm("Delete this recipe?")) return;

    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Recipe List</h3>
        <Link className="btn btn-success" to="/add">Add Recipe</Link>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped table-bordered bg-white">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Cook Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length === 0 && !error ? (
            <tr>
              <td colSpan="3" className="text-center">No recipes found. Add your first recipe.</td>
            </tr>
          ) : (
            recipes.map((recipe) => (
              <tr key={recipe._id}>
                <td>
                  <Link to={`/recipes/${recipe._id}`}>{recipe.name}</Link>
                </td>
                <td>{recipe.cookTime}</td>
                <td>
                  <Link className="btn btn-sm btn-primary me-2" to={`/edit/${recipe._id}`}>
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteRecipe(recipe._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
