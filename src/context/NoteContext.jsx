import React, { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  
  // Replace the API URL with your MockAPI URL
  const api = 'https://6804ba1179cb28fb3f5ba964.mockapi.io/notes'; // This is your endpoint

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = (note) => {
    fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    })
      .then(res => res.json())
      .then(newNote => setNotes([...notes, newNote]));
  };

  const deleteNote = (id) => {
    fetch(`${api}/${id}`, { method: 'DELETE' })
      .then(() => setNotes(notes.filter(note => note.id !== id)));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};
