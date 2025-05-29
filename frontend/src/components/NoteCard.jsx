import axios from "axios";
import React from "react";

const pastelColors = [
  "bg-yellow-100",
  "bg-green-100",
  "bg-red-100",
  "bg-blue-100",
  "bg-purple-100",
  "bg-pink-100",
];

export default function NoteCard({ note, toggleRefresh }) {
  const color = pastelColors[note.id % pastelColors.length];

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:8000/api/notes/${id}`);
      toggleRefresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`p-4 rounded-xl shadow-md ${color}`}>
      {note.image_path && (
        <img
          src={`http://localhost:8000/storage/${note.image_path}`}
          alt="Nota"
          className="mx-auto mb-2 rounded-md h-32 w-auto max-w-full object-contain"
        />
      )}
      <h2 className="text-lg font-semibold text-gray-800 mb-1">{note.title}</h2>
      <p className="text-gray-700 text-sm mb-2">{note.content}</p>
      <div className="flex justify-end space-x-2">
        <button className="text-gray-600 hover:text-blue-600">✏️</button>
        <button
          className="text-gray-600 hover:text-red-600"
          onClick={() => handleDelete(note.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
