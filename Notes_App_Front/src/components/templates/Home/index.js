import React from 'react';
import './index.scss';
import TaskForm from '../../organisims/TaskForm';
import DocsList from '../../organisims/DocsList';

function Home({ notes, setNotes }) {
  return (
    <section className="mainInner">
      <TaskForm currNotes={notes} setNotes={setNotes} />
      <DocsList notes={notes} setNotes={setNotes} />
    </section>
  );
}

export default Home;
