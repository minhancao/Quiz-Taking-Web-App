import axios from "axios";

import { GET_QUIZ_QUESTIONS } from "./types";

export const getQuizQuestions = () => (dispatch) => {
  axios
    .get("/api/quizquestions/")
    .then((res) => {
      dispatch({
        type: GET_QUIZ_QUESTIONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
