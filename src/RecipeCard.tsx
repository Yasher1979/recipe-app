import React, { useRef } from "react";

export const RecipeCard = ({
  id,
  name,
  imageUrl,
  onUpdateImage,
  onClick
}: {
  id: string;
  name: string;
  imageUrl: string;
  onUpdateImage: (id: string, file: File) => void;
  onClick: () => void;
}) => {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpdateImage(id, file);
  };

  return (
    <div
      className="shadow-md rounded-xl border overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover"
      />

      <div className="p-3">
        <h2 className="text-lg font-bold">{name}</h2>

        <button
          className="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded"
          onClick={(e) => {
            e.stopPropagation();
            fileRef.current?.click();
          }}
        >
          画像を変更
        </button>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileRef}
          onChange={handleImageSelect}
        />
      </div>
    </div>
  );
};
