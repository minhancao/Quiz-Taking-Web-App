import { GET_QUIZ_QUESTIONS } from "../actions/types.js";

const initialState = {
  quizQuestions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUIZ_QUESTIONS:
      return {
        ...state,
        quizQuestions: action.payload,
      };
    default:
      return state;
  }
}
