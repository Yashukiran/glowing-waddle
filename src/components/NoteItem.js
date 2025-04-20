import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NoteContext } from '../context/NoteContext';

const NoteItem = ({ note }) => {
  const { deleteNote } = useContext(NoteContext);

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content.slice(0, 60)}...</p>
      <div className="note-actions">
        <Link to={`/note/${note.id}`}>View</Link>
        <button onClick={() => deleteNote(note.id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
