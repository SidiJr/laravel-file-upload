import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";

export default function NoteList({ refresh, toggleRefresh }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => setNotes(res.data));
  }, [refresh]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} toggleRefresh={toggleRefresh} />
      ))}
    </div>
  );
}
