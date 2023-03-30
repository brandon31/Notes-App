import React, { useRef } from "react";
import "./App.css";

function Note({ title, description }) {
  const noteContainerRef = useRef();

  const deleteNote = () => {
    noteContainerRef.current.remove();
  };

  return (
    <div className="note-container" ref={noteContainerRef}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={deleteNote}>Delete</button>
    </div>
  );
}

export default Note;

Note.defaultProps = {
  title: "Note 1",
  description: "This is note 1",
};
