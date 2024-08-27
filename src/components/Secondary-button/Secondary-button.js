import React from "react";
import PropTypes from "prop-types";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div>
        I am a {this.state.color} <strong>{this.props.children}</strong> !
      </div>
    );
  }
}
Car.propTypes = {
  children: PropTypes.string,
};
Car.defaultProps = {
  children: "SPORTS CAR",
};

export default Car;
