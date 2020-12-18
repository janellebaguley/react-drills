import React, {Component}from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <section className="App">
        <h1>Git 'er done list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </section>
    );
  }
}

export default App;