import React from "react";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  addTodo = () => {
    this.props.addTodoHandler({ text: this.state.value, completed: false });
    this.setState({ value: "" });
  };

  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}
