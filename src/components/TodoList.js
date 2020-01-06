/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTodo,
  toggleCompleteTodo,
  toggleEditTodo,
  editTodo
} from "../js/actions/index";

class TodoList extends Component {
  state = {
    editedTitle: ""
  };
  render() {
    return (
      <div className="todo-list">
        
        {console.log(this.state.newTitle)}
        {this.props.todos.map((el, index) => (
          <div key={index} className="todo">
            <input
              className="task-title"
              type="text"
              value={el.isEditing ? this.state.editedTitle : el.text}
              style={
                el.isComplete
                  ? { textDecoration: `line-through` }
                  : { textDecoration: `none` }
              }
              onChange={e => this.setState({ editedTitle: e.target.value })}
              readOnly={!el.isEditing}
            />
            {console.log(this.state.editedTitle)}
            <button onClick={() => this.props.toggleCompleteTodo(el.id)}>
              {el.isComplete?"Undo":"Complete"}
            </button>
            <button onClick={() => this.props.deleteTodo(el.id)}>Delete</button>
            <button
              onClick={() => {
                this.props.editTodo({
                  id: el.id,
                  newTitle: this.state.editedTitle
                });
                this.props.toggleEditTodo(el.id);
                this.setState({ editedTitle: "" });
              }}
            >
              {el.isEditing ? "Save" : "Edit"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { todos: state.todoList };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: payload => dispatch(deleteTodo(payload)),
    toggleCompleteTodo: payload => dispatch(toggleCompleteTodo(payload)),
    toggleEditTodo: payload => dispatch(toggleEditTodo(payload)),
    editTodo: payload => dispatch(editTodo(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
