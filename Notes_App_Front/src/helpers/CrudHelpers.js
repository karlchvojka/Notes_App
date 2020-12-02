import APIHelper from './APIHelper.js';

const deleteNote = async (e, id) => {
  try {
    e.stopPropagation();
    await APIHelper.deleteNote(id);
  } catch (err) {
    console.log('Delete Error: ', err);
  }
};

const createNote = async (e, note) => {
  e.preventDefault();
  if (!note) {
    alert('please enter something');
    return;
  }

  const newNote = await APIHelper.createNote(note);
  return newNote;
};

const updateNote = async (e, noteID, note) => {
  e.stopPropagation();
  const updatedNote = await APIHelper.updateNote(note, noteID);
  return updatedNote;
};

export default {
  createNote,
  deleteNote,
  updateNote,
};
