import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_URL from "../api";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setRecipe(data);
    }
    getRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="card p-4 bg-white">
      <h3>{recipe.name}</h3>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <div>
        <Link className="btn btn-primary me-2" to={`/edit/${recipe._id}`}>Edit</Link>
        <Link className="btn btn-secondary" to="/">Back</Link>
      </div>
    </div>
  );
}
