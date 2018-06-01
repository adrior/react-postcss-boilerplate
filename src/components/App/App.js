import "./App.css";
import React from "react";
import List from "../List/List.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  handleChange = id => {
    let actions = this.state.actions;
    let current = actions.find(el => el.id === id);
    current.checked = !current.checked;
    this.setState({
      actions
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{this.props.title}</h1>
        <List actions={this.props.actions} onChange={this.handleChange} />
      </div>
    );
  }
}
