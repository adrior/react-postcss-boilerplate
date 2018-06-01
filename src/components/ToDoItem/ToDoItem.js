import "./ToDoItem.css";
import React from "react";

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        className={
          "ToDoItem" + (this.props.checked ? " ToDoItem__checked" : "")
        }
      >
        <label>
          <input
            type="checkbox"
            className="ToDoItem__checkbox"
            checked={this.props.checked}
            onChange={() => {
              this.props.onChange(this.props.id);
            }}
          />
          <span>{this.props.title}</span>
        </label>
      </li>
    );
  }
}
