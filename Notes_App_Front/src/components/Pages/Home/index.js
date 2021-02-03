import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import DocsList from './DocsList';

function Home({ notes, setNotes }) {
  const [sorted, setSorted] = useState();
  const { catID } = useParams();
  const getNotesByCat = (catID, notes) => {
    return notes.filter(note => note.category === catID);
  };

  useEffect(() => {
    if(catID) {
      setSorted(getNotesByCat(catID, notes));
    } else {
      setSorted(notes);
    }
  }, [notes]);

  return (
    <section className="mainInner">
      <DocsList notes={sorted || notes} setNotes={setNotes} />
    </section>
  );
}

export default Home;
