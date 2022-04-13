import './App.css';
import { useState } from 'react';

const Notes = ({notes}) => {
  return notes.map(note => <li key={note.id}>{note.content}</li>)
}

const App = ({notes}) => {
 
  return (
    <div>
      <ul>
        {/* <Notes notes={notes} /> */}
        {notes.map(note => <li key={note.id}>{note.content}</li>)}
      </ul>
    </div>
  )
}

export default App;
