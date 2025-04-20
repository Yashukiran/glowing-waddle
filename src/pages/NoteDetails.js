import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';

const NoteDetails = () => {
  const { id } = useParams();
  const { notes } = useContext(NoteContext);
  const note = notes.find(n => n.id === id);

  if (!note) return <p>Note not found.</p>;

  return (
    <div className="container">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteDetails;
