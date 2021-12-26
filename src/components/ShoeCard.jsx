import React, { Component } from "react";
import Update from "./Update";

class ShoeCard extends Component {
  state = { visibility: false, id: "" };

  toggleVisibility = () => {
    this.setState((prevState) => {
      return { visibility: !prevState.visibility };
    });
  };

  render() {
    if (this.state.visibility)
      return (
        <Update
          id={this.props.shoe.id}
          getFunc={this.props.getfunc}
          visFunc={this.toggleVisibility}
        />
      );
    return (
      <div key={this.props.shoe.id}>
        {this.props.shoe.name}
        <br />
        {this.props.shoe.model}
        <br />
        {this.props.shoe.size}
        <br />
        <button
          onClick={() => {
            this.props.delFunc(this.props.shoe.id);
          }}
        >
          Delete
        </button>
        <button onClick={this.toggleVisibility}>Update</button>
      </div>
    );
  }
}
export default ShoeCard;
