import APIHelper from './APIHelper.js';

const deleteNote = async (e, id) => {
  try {
    e.stopPropagation();
    await APIHelper.deleteNote(id);
  } catch (err) {
    console.log('Delete Error: ', err);
  }
};

const createNote = async (e, note, noteID) => {
  e.preventDefault();
  let theNote;
  if (!note) {
    alert('please enter something');
    return;
  }

  if(!noteID) {
    theNote = await APIHelper.createNote(note);
  } else {
    theNote = await APIHelper.updateNote(note, noteID);
  }

  return theNote;
};

const updateNote = async (e, note, noteID) => {
  e.stopPropagation();
  return updatedNote;
};

export default {
  createNote,
  deleteNote,
  updateNote,
};
