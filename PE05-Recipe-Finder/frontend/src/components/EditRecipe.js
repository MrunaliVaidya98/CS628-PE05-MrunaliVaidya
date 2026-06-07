import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../api";

export default function EditRecipe() {
  const [form, setForm] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    cookTime: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getRecipe() {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      setForm({
        name: data.name || "",
        ingredients: data.ingredients || "",
        instructions: data.instructions || "",
        cookTime: data.cookTime || "",
      });
    }
    getRecipe();
  }, [id]);

  function updateForm(value) {
    setForm((prev) => ({ ...prev, ...value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/");
  }

  return (
    <div className="card p-4 bg-white">
      <h3>Edit Recipe</h3>
      <form onSubmit={onSubmit}>
        <label className="form-label">Recipe Name</label>
        <input
          className="form-control mb-3"
          value={form.name}
          onChange={(e) => updateForm({ name: e.target.value })}
          required
        />

        <label className="form-label">Ingredients</label>
        <textarea
          className="form-control mb-3"
          value={form.ingredients}
          onChange={(e) => updateForm({ ingredients: e.target.value })}
          required
        />

        <label className="form-label">Instructions</label>
        <textarea
          className="form-control mb-3"
          value={form.instructions}
          onChange={(e) => updateForm({ instructions: e.target.value })}
          required
        />

        <label className="form-label">Cook Time</label>
        <input
          className="form-control mb-3"
          value={form.cookTime}
          onChange={(e) => updateForm({ cookTime: e.target.value })}
          required
        />

        <button className="btn btn-primary" type="submit">Update Recipe</button>
      </form>
    </div>
  );
}
