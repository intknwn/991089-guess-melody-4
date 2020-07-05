import React from "react";
import renderer from "react-test-renderer";
import Mistakes from "./mistakes.jsx";

describe(`Mistakes component render correctly`, () => {
  it(`with no mistakes`, () => {
    const tree = renderer
      .create(
          <Mistakes
            count={0}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with one mistake`, () => {
    const tree = renderer
      .create(
          <Mistakes
            count={1}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
