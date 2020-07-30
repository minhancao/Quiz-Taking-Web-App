import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";
import QuizContainer from "./QuizContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <h1 class="row h-100 justify-content-center align-items-center">
            Quiz Taking Web App
          </h1>
          <div class="row h-100 justify-content-center align-items-center">
            <QuizContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
