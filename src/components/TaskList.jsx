import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/todoActions';


class TaskList extends Component {
  render() {
    return (
      <div>
        <h2 className="TaskList__title">Task List</h2>
        {this.props.tasks.map((task, i) => {
          if (!task.complete) {
            return (
              <Task
                task={task}
                key={i}
                toggleCompleteStatus={() => {
                  this.props.toggleCompleteStatus(i);
                }}
                deleteTask={() => {
                  this.props.deleteTask(i);
                }}
              />
            );
          }
          return '';
        })}
        <h2 className="TaskList__title">Completed Tasks</h2>
        {this.props.tasks.map((task, i) => {
          if (task.complete) {
            return (
              <Task
                task={task}
                key={i}
                toggleCompleteStatus={() => {
                  this.props.toggleCompleteStatus(i);
                }}
                deleteTask={() => {
                  this.props.deleteTask(i);
                }}
              />
            );
          }
          return '';
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    tasks: state.tasks
  }
}

const mapDispatchToProps = {
  toggleCompleteStatus: toggleTodo,
  deleteTask: deleteTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)