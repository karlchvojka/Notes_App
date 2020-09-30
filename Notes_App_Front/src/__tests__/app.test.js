import React from "react";

import { render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';

import App from "../App";

afterEach(cleanup);

describe('when the app renders', () => {

  it("renders without crashing", () => {
    const wrapper = renderer.create(<App />);
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });


});
