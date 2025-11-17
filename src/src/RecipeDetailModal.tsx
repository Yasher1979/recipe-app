import React from "react";
import jsPDF from "jspdf";

export const RecipeDetailModal = ({ isOpen, onClose, recipe }: any) => {
  if (!isOpen) return null;

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.text(`レシピ名: ${recipe.name}`, 10, 10);
    pdf.text("（レシピ詳細や原価などをここに出力できます）", 10, 20);
    pdf.save(`${recipe.name}.pdf`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg p-4 shadow-xl">
        <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>

        <img src={recipe.imageUrl} className="w-full rounded" />

        <button
          onClick={generatePDF}
          className="mt-4 w-full bg-green-600 text-white py-2 rounded"
        >
          PDF生成
        </button>

        <button
          onClick={onClose}
          className="mt-2 w-full bg-gray-300 py-2 rounded"
        >
          閉じる
        </button>
      </div>
    </div>
  );
};
