import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getQuizQuestions } from "../actions/quizQuestions";

class QuizContainer extends Component {
  static propTypes = {
    quizQuestions: PropTypes.array.isRequired,
    getQuizQuestions: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props.getQuizQuestions();
    this.state = {
      answers: [],
      currentQuestion: 0,
      score: 0,
      showResults: false,
      review: false,
    };
  }

  nextQuestion = () => {
    if (
      this.props.quizQuestions != null &&
      this.state.currentQuestion < this.props.quizQuestions.length - 1
    ) {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    } else {
    }
  };

  prevQuestion = () => {
    if (this.props.quizQuestions != null && this.state.currentQuestion > 0) {
      this.setState({ currentQuestion: this.state.currentQuestion - 1 });
    } else {
    }
  };

  changeCurrentAnswer = (chosenAnswer) => {
    let currAnsArr = this.state.answers;
    if (currAnsArr.length < this.state.currentQuestion + 1) {
      currAnsArr.push(chosenAnswer);
    } else {
      currAnsArr[this.state.currentQuestion] = chosenAnswer;
    }
    this.setState({ answers: currAnsArr });
  };

  handleSubmit = () => {
    const currAnsArr = this.state.answers;
    const questionsData = this.props.quizQuestions;
    let i = 0;
    let score = 0;
    for (i = 0; i < questionsData.length; i++) {
      if (currAnsArr[i] === questionsData[i].correct_answer) {
        score++;
      }
    }
    this.setState({ score, showResults: true });
  };

  handleRetakeQuiz = () => {
    this.setState({
      answers: [],
      currentQuestion: 0,
      score: 0,
      showResults: false,
      review: false,
    });
  };

  handleReviewQuiz = () => {
    this.setState({
      currentQuestion: 0,
      showResults: false,
      review: true,
    });
  };

  render() {
    const currentQuizQuestion = this.props.quizQuestions[
      this.state.currentQuestion
    ];
    return (
      <div>
        {this.props.quizQuestions.length == 0 ? (
          <h2>Loading quiz questions...</h2>
        ) : !this.state.showResults ? (
          <div>
            {this.state.review ? (
              <h2 class="row h-100 justify-content-center align-items-center">
                Review Mode
              </h2>
            ) : null}
            <h2>{currentQuizQuestion.question}</h2>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked={
                  this.state.answers[this.state.currentQuestion] ===
                  currentQuizQuestion.answer1
                    ? true
                    : false
                }
                onClick={() =>
                  this.changeCurrentAnswer(currentQuizQuestion.answer1)
                }
                disabled={this.state.review}
              />
              <label
                class="form-check-label"
                for="exampleRadios1"
                style={
                  this.state.review &&
                  currentQuizQuestion.answer1 ===
                    currentQuizQuestion.correct_answer
                    ? { color: "green" }
                    : null
                }
              >
                {currentQuizQuestion.answer1}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
                checked={
                  this.state.answers[this.state.currentQuestion] ===
                  currentQuizQuestion.answer2
                    ? true
                    : false
                }
                onClick={() =>
                  this.changeCurrentAnswer(currentQuizQuestion.answer2)
                }
                disabled={this.state.review}
              />
              <label
                class="form-check-label"
                for="exampleRadios2"
                style={
                  this.state.review &&
                  currentQuizQuestion.answer2 ===
                    currentQuizQuestion.correct_answer
                    ? { color: "green" }
                    : null
                }
              >
                {currentQuizQuestion.answer2}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios3"
                value="option3"
                checked={
                  this.state.answers[this.state.currentQuestion] ===
                  currentQuizQuestion.answer3
                    ? true
                    : false
                }
                onClick={() =>
                  this.changeCurrentAnswer(currentQuizQuestion.answer3)
                }
                disabled={this.state.review}
              />
              <label
                class="form-check-label"
                for="exampleRadios3"
                style={
                  this.state.review &&
                  currentQuizQuestion.answer3 ===
                    currentQuizQuestion.correct_answer
                    ? { color: "green" }
                    : null
                }
              >
                {currentQuizQuestion.answer3}
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios4"
                value="option4"
                checked={
                  this.state.answers[this.state.currentQuestion] ===
                  currentQuizQuestion.answer4
                    ? true
                    : false
                }
                onClick={() =>
                  this.changeCurrentAnswer(currentQuizQuestion.answer4)
                }
                disabled={this.state.review}
              />
              <label
                class="form-check-label"
                for="exampleRadios4"
                style={
                  this.state.review &&
                  currentQuizQuestion.answer4 ===
                    currentQuizQuestion.correct_answer
                    ? { color: "green" }
                    : null
                }
              >
                {currentQuizQuestion.answer4}
              </label>
            </div>

            <button
              type="button"
              class="btn btn-light"
              onClick={() => this.prevQuestion()}
              disabled={this.state.currentQuestion === 0 ? true : false}
            >
              Previous Question
            </button>
            <button
              type="button"
              class="btn btn-light"
              onClick={() => this.nextQuestion()}
              disabled={
                this.state.answers.length < this.state.currentQuestion + 1 ||
                this.state.currentQuestion ===
                  this.props.quizQuestions.length - 1
                  ? true
                  : false
              }
            >
              Next Question
            </button>
            {!this.state.review ? (
              <button
                type="button"
                class="btn btn-primary"
                disabled={
                  this.state.answers.length === this.props.quizQuestions.length
                    ? false
                    : true
                }
                onClick={() => this.handleSubmit()}
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => this.handleRetakeQuiz()}
              >
                Retake Quiz
              </button>
            )}
          </div>
        ) : (
          <div>
            <h3 class="row h-100 justify-content-center align-items-center">
              You scored {this.state.score} / {this.props.quizQuestions.length}!
            </h3>
            <div class="row btn-toolbar">
              <button
                type="button"
                class="btn btn-info col"
                onClick={() => this.handleReviewQuiz()}
              >
                Review Quiz
              </button>
              <button
                type="button"
                class="btn btn-primary col offset-1"
                onClick={() => this.handleRetakeQuiz()}
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quizQuestions: state.quizQuestions.quizQuestions,
});

export default connect(mapStateToProps, { getQuizQuestions })(QuizContainer);
