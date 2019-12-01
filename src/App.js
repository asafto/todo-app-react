import React, {Component} from 'react';
import './App.css'
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addTask(task) {
        this.setState( {
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(task) {
        this.setState({
            tasks: this.state.tasks.filter(t => t !== task)
        });
    }

   render() {
    return (
        <div className="App">
          <AddTaskForm onAdd={this.addTask.bind(this)} />
          <ul>
              {this.state.tasks.map((task, index) => {
                  return <Task key={index} text={task} onDelete={this.deleteTask.bind(this)} />;
              })}
          </ul>
        </div>
    );
  }
}

export default App;
