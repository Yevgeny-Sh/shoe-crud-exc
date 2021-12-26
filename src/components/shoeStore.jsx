import React from "react";
import ShoeCard from "./ShoeCard";
import Api from "./Api";
import Create from "./Create";
import "./style.css";

class ShoeStore extends React.Component {
  state = {
    shoes: [],
  };

  getData = async () => {
    const dataFromApi = await Api.get();
    this.setState({ shoes: dataFromApi.data });
  };

  componentDidMount() {
    this.getData();
  }

  dataRender() {
    const shoeList = this.state.shoes.map((elem) => {
      return (
        <ShoeCard
          className="ShoeCard"
          getfunc={this.getData}
          delFunc={this.handleDelete}
          shoe={elem}
          key={elem.id}
        />
      );
    });
    return shoeList;
  }

  handleDelete = async (id) => {
    await Api.delete(`/${id}`);
    this.getData();
  };

  render() {
    return (
      <div className="main-container">
        <h1> welcome to my shoe store</h1>
        <h5>create new item</h5>
        <Create className="create" getfunc={this.getData}></Create>
        <div>{this.dataRender()}</div>
      </div>
    );
  }
}

export default ShoeStore;
