import React, { useState, useRef } from "react";
import Note from "./Note";
import "./App.css";

function App() {
  const [noteTitle, setNoteTitle] = useState();
  const [noteDescription, setNoteDescription] = useState();

  const [addnote, setAddNote] = useState([]);

  const noteRef = useRef();

  const addNote = () => {
    if (noteTitle !== "" || noteDescription !== "") {
      setAddNote([
        ...addnote,
        { title: noteTitle, description: noteDescription },
      ]);
      setNoteTitle("");
      setNoteDescription("");
    } else {
      alert("please input something");
    }
  };
  return (
    <>
      <div className="container">
        <div className="add-note">
          <h4>Add a note</h4>
          <input
            type="text"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            placeholder="Title"
            ref={noteRef}
          />
          <textarea
            id="note-input"
            value={noteDescription}
            onChange={(e) => setNoteDescription(e.target.value)}
            placeholder="Description"
            cols="10"
            rows="8"
            ref={noteRef}
          ></textarea>
          <button onClick={addNote}>Add Note</button>
        </div>
        <div className="note-grid">
          {addnote.map((note) => {
            return <Note title={note.title} description={note.description} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
