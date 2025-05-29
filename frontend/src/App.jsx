import React, { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const toggleRefresh = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen bg-[#f7f9fc] p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Notas Rápidas</h1>
          <button
            onClick={() =>
              document.getElementById("note-form").scrollIntoView()
            }
            className="bg-blue-600 text-white rounded-full px-4 py-2 font-medium hover:bg-blue-700"
          >
            + Nova
          </button>
        </div>
        <div id="note-form">
          <NoteForm onNoteCreated={toggleRefresh} />
        </div>
        <NoteList refresh={refresh} toggleRefresh={toggleRefresh} />
      </div>
    </div>
  );
}
