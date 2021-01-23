import React from 'react';
import './index.scss';
import DocsList from './DocsList';

function Home({ notes, setNotes }) {
  return (
    <section className="mainInner">
      <DocsList notes={notes} setNotes={setNotes} />
    </section>
  );
}

export default Home;
