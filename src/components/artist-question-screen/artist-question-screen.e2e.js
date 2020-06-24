import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistQuestionScreen from "./artist-question-screen.jsx";

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: ``,
      src: ``
    },
    answers: [
      {
        artist: `one`,
        picture: `pic-one`,
      },
      {
        artist: `two`,
        picture: `pic-two`,
      },
      {
        artist: `three`,
        picture: `pic-three`,
      },
    ],
  }
};

it(`Callback data-object matches the user answer`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const userAnswer = question.answers[0];

  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const answerInputs = screen.find(`input`);
  const firstInput = answerInputs.at(0);

  firstInput.simulate(`change`, {preventDefault() {}});

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
