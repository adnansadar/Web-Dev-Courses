import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid"; //used for setting random user data
import axios from "axios";
import "./App.css";

class App extends Component {
  //With props, we have a one way data flow, but with state we can update private data from a component.
  //state is any data that should be saved and modified without necessarily being added to a database
  //cannot modify the app without using state object!
  state = {
    todos: [],
  };

  componentDidMount() {
    axios //used for HTTP requests similar to Fetch API
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10") //getting our list backend data online
      .then((res) => this.setState({ todos: res.data })); //after data is received we update todos in App.js state
  }

  // Toggle CheckBox
  markComplete = (id) => {
    //id of the checkbox clicked will be passed
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)], //all ids not similar to the id passed in will be deleted
        })
      );
  };

  // Add Todo
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        res.data.id = uuid.v4(); //assigning random id generated
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  };

  render() {
    //used to render DOM nodes
    return (
      //
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
