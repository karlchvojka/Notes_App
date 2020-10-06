import React from 'react';
import './index.scss';
import TaskForm from '../../organisims/TaskForm';

function NoteForm({ notes, setNotes }) {
  return (
    <section className="formInner">
      <TaskForm currNotes={notes} setNotes={setNotes} />
    </section>
  );
}

export default NoteForm;
