import React, {Component} from 'react';
import './Task.css'

class Task extends Component {

    deleteTask() {
        this.props.onDelete(this.props.text);
    }

    render() {
        return (
            <li>
                {this.props.text}
                <button onClick={this.deleteTask.bind(this)}>Delete</button>
            </li>
        );
    }
}

export default Task;