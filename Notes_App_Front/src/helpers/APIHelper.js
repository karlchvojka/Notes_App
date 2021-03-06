import axios from 'axios';

const API_URL = 'http://localhost:3000/notes';

async function createNote(note) {
  const resp = await axios.post(API_URL, note);
  return resp;
}

async function deleteNote(id) {
  const message = await axios.delete(`${API_URL}/${id}`);
  return message;
}

async function updateNote(note, noteID) {
  const { data: newNote } = await axios.put(`${API_URL}/${noteID}`, note);
  return newNote;
}

async function getAllNotes() {
  const { data: notes } = await axios.get(API_URL);
  return notes;
}
export default {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
};
