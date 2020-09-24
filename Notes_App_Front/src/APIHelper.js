import axios from "axios";

const API_URL = "http://localhost:3000/notes"

async function createNote(note) {
  console.log('create', note)

    const resp = await axios.post(API_URL, note);
    console.log('post resp', resp);
    return resp
  
  // await axios.post(API_URL, note
  // ).then(function(res) {
  //   console.log('res', res)
  //   return newNote
  // }).catch(function(error) {
  //   console.log(error)
  // })
}

async function deleteNote(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function updateNote(id, payload) {
  const { data: newNote } = await axios.put(`${API_URL}${id}`, payload)
  return newNote
}

async function getAllNotes() {
  const { data: notes } = await axios.get(API_URL)
  console.log('res', notes)
  return notes
}

export default { createNote, deleteNote, updateNote, getAllNotes }
