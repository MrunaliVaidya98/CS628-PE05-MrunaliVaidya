import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../api";

export default function AddRecipe() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: "",
  });

  const navigate = useNavigate();

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/");
  }

  return (
    <div className="card p-4 bg-white">
      <h3>Add Recipe</h3>
      <form onSubmit={onSubmit}>
        <label className="form-label">Recipe Name</label>
        <input
          className="form-control mb-3"
          placeholder="Chicken Curry"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
          required
        />

        <label className="form-label">Ingredients</label>
        <textarea
          className="form-control mb-3"
          placeholder="Chicken, onion, tomato, spices"
          value={form.ingredients}
          onChange={(e) => updateForm({ ingredients: e.target.value })}
          required
        />

        <label className="form-label">Instructions</label>
        <textarea
          className="form-control mb-3"
          placeholder="Cook all ingredients for 30 minutes"
          value={form.instructions}
          onChange={(e) => updateForm({ instructions: e.target.value })}
          required
        />

        <label className="form-label">Cook Time</label>
        <input
          className="form-control mb-3"
          placeholder="30 minutes"
          value={form.cookTime}
          onChange={(e) => updateForm({ cookTime: e.target.value })}
          required
        />

        <button className="btn btn-success" type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
