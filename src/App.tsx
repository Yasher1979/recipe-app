import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import { RecipeDetailModal } from "./RecipeDetailModal";
import "./index.css";

const initialRecipes = [
  { id: "1", name: "ナポリタン", imageUrl: "https://via.placeholder.com/300x200?text=ナポリタン" },
  { id: "2", name: "カルボナーラ", imageUrl: "https://via.placeholder.com/300x200?text=カルボナーラ" }
];

const App = () => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleUpdateImage = (id: string, file: File) => {
    const url = URL.createObjectURL(file);
    setRecipes(recipes.map(r => (r.id === id ? { ...r, imageUrl: url } : r)));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">レシピ管理プレビュー</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {recipes.map(r => (
          <RecipeCard
            key={r.id}
            id={r.id}
            name={r.name}
            imageUrl={r.imageUrl}
            onUpdateImage={handleUpdateImage}
            onClick={() => setSelectedRecipe(r)}
          />
        ))}
      </div>

      {selectedRecipe && (
        <RecipeDetailModal
          isOpen={!!selectedRecipe}
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default App;
