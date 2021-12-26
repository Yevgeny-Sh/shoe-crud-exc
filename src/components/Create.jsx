import React, { Component } from "react";
import Api from "./Api";

class Create extends Component {
  state = { name: "", model: "", size: "" };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(this.state);
  };
  handleCreate = async () => {
    const newItem = this.state;
    await Api.post("", newItem);
    this.props.getfunc();
  };
  render() {
    return (
      <div className="create-container">
        <input
          onChange={this.handleOnChange}
          type="text"
          name="name"
          placeholder="New shoe name"
        />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="model"
          placeholder="New shoe model"
        />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="size"
          placeholder="New shoe size"
        />
        <button
          className="create-btn"
          // style={{ height: "2rem" }}
          onClick={this.handleCreate}
        >
          create new product
        </button>
      </div>
    );
  }
}
export default Create;
