import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';

import NoteItem from "../components/modules/NoteItem/";

afterEach(cleanup);

describe('when the app renders', () => {
  const note = {
    _id: 1,
    title: "Test note",
    content: "The test note content",
    date:"2020-02-02",
    category: "test"
  };

  const notes = [
    {
      _id: 0,
      title: "Test note",
      content: "The test note content",
      date:"2020-02-02",
      category: "test"
    },
    {
      _id: 1,
      title: "Test note1",
      content: "The test note1 content",
      date:"2020-02-01",
      category: "test"
    },
    {
      _id: 2,
      title: "Test note2",
      content: "The test note2 content",
      date:"2020-02-02",
      category: "test"
    },
  ]

  const wrapper = renderer.create(
    <NoteItem
      key={note._id}
      note={note}
      notes={notes}
    />
  );

  it("renders without crashing", () => {
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls the handleClick function on delete button", async () => {
    const handleClick = jest.fn();
    const setNotes = jest.fn();

    const { getByText } = render(<NoteItem
        key={note._id}
        note={note}
        notes={notes}
        setNotes={setNotes}
      />);

    fireEvent.click(getByText('X'));
    await expect(handleClick).toHaveBeenCalled();
  })


});
