import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

export const getQuestions = (state) => {
  return state[NameSpace.DATA].questions;
};

const randomFilter = () => {
  return Math.random() > 0.5;
};

export const getArtistQuestions = createSelector(
    getQuestions,
    randomFilter,
    (questions, randomBoolean) => {
      return questions.filter((question) => randomBoolean && question.type === `artist`);
    }
);

export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => {
      return questions.filter((question) => question.type === `genre`);
    }
);

