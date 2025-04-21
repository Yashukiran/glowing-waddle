import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NoteProvider } from './context/NoteContext';
import Navbar from './components/Navbar';
import AllNotes from './pages/AllNotes';
import AddNote from './pages/AddNote';
import NoteDetails from './pages/NoteDetails';

function App() {
  return (
    <NoteProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllNotes />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/note/:id" element={<NoteDetails />} />
        </Routes>
      </Router>
    </NoteProvider>
  );
}

export default App;
