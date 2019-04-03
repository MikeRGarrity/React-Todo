import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends Component {
  render() {
    const todoComponents = todosData.map(item => (
      <TodoItem key={item.id} item={item} />
    ));
    return <div className="App">{todoComponents}</div>;
  }
}

export default App;
