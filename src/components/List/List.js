import "./List.css";
import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem.js";

export default class List extends React.Component {
  constructor(params) {
    super(params);
    this.state = {
      actions: this.props.actions
    };
  }

  render() {
    return (
      <ol className="List" actions={this.props.actions}>
        {this.state.actions.map(el => (
          <ToDoItem
            title={el.title}
            key={el.id}
            id={el.id}
            checked={el.checked}
            onChange={this.props.onChange}
          />
        ))}
      </ol>
    );
  }
}
