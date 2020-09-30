import APIHelper from "./APIHelper.js"

const deleteNote = async (e, id) => {
  try {
    e.stopPropagation()
    await APIHelper.deleteNote(id)
  } catch (err) {}
}

const createNote = async (e, note) => {
  e.preventDefault();
  if (!note) {
    alert("please enter something")
    return
  }

  const newNote = await APIHelper.createNote(note)
  return newNote
}

export default { deleteNote, createNote }
