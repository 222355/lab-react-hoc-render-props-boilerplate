import React from "react";

const HocLikeImage = (WrappedComponent) => {
  return class extends React.Component {
    state = { LikeImageCounter: 0 };

    handleLike = () => {
      this.setState((prevState) => ({
        LikeImageCounter: prevState.LikeImageCounter + 1,
      }));
    };

    render() {
      return (
        <WrappedComponent
          LikeImageCounter={this.state.LikeImageCounter}
          onLikeImageCounter={this.handleLike}
          {...this.props}
        />
      );
    }
  };
};

export default HocLikeImage;
