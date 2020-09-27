import React from "react";
import { render, cleanup } from "@testing-library/react";
import TaskForm from "../components/organisims/TaskForm/";
import { createNote } from "../components/organisims/TaskForm/";
import { fireEvent } from "@testing-library/react";

describe("TaskForm", () => {
  let wrapper =
  afterEach(cleanup);

  it("Submits", () => {
    const createNote = jest.fn();
    const { getByText, getByPlaceholderText, queryByText } = render(<TaskForm />);
    fireEvent.click(getByText("Add"));
  });

  it("Recieves the notes", async () => {
    const createNote = jest.fn();
    const setNotes = jest.fn();
    let notes = [
      {_id: 1, title: "the title", content: "the content", date: "date", category: "category"}
    ]

    const{ getByText, getByPlaceholderText, queryByText } = render(<TaskForm setNotes={setNotes} currNotes={notes} />);

    fireEvent.change(document.getElementById("noteTitleInput"), {
      target: { value: "title" }
    });
    fireEvent.change(document.getElementById("noteDateInput"), {
      target: { value: "the date" }
    });
    fireEvent.change(document.getElementById("noteCatInput"), {
      target: { value: "stuff" }
    });
    fireEvent.change(document.getElementById("noteContentInput"), {
      target: { value: "stuff" }
    });

    fireEvent.click(getByText("Add"));
    await expect(setNotes).toHaveBeenCalled();
  })

})
