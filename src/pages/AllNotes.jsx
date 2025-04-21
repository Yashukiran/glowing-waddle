import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import NoteItem from '../components/NoteItem';

const AllNotes = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div className="container">
      <h2>All Notes</h2>
      {notes.length === 0 ? <p>No notes available.</p> :
        notes.map(note => <NoteItem key={note.id} note={note} />)}
    </div>
  );
};

export default AllNotes;
