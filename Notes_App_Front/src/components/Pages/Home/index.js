import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import DocsList from './DocsList';

function Home({ notes, setNotes }) {
  const [sorted, setSorted] = useState();
  const { cat } = useParams();
  const getNotesByCat = (cat) => {
    const catNotes = notes.filter(note => note.category === cat);
    return catNotes;
  };

  return (
    <section className="mainInner">
      <DocsList notes={notes} setNotes={setNotes} />
    </section>
  );
}

export default Home;
