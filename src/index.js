import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BookView } from "./BookView";
import "./styles.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { UpdateBookView } from "./UpdateBookView";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={BookView} />
            <Route path="/book/update/:bookRef" component={UpdateBookView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
