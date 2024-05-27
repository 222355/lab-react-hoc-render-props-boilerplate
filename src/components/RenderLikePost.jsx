import React, { Component } from "react";

export default class RenderLikePost extends Component {
  state = { like: 0 };
  handleLike = () => {
    this.setState((prev) => ({ like: prev.like + 1 }));
  };
  render() {
    return this.props.render({
      like: this.state.like,
      onLike: this.handleLike,
    });
  }
}
