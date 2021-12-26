//parent is each shoe componenet
//getData funciton to be called after each put

import React, { Component } from "react";
import Api from "./Api";

class Update extends Component {
  state = { name: "", model: "", size: "" };

  handleUpdate = async () => {
    this.props.visFunc();
    await Api.put(this.props.id, this.state);
    this.props.getFunc();
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="update-window">
        <input
          onChange={this.handleOnChange}
          type="text"
          name="name"
          placeholder="New name"
          value={this.state.name}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="model"
          placeholder="New model"
          value={this.state.model}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="size"
          placeholder="New size"
          value={this.state.size}
        />
        <br />
        <button onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}
export default Update;
