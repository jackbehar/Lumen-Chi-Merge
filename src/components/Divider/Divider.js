import * as PropTypes from "prop-types";
import * as React from "react";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/divider/
 * @uxpindescription Dividers are lines that render a break or separation between content.
 */
export default class Divider extends React.Component {
  render() {
    return (
      <div
        className={`
        chi-divider
        ${this.props.inverse ? "-inverse" : ""}
        ${this.props.vertical ? "-vertical" : ""}
        ${this.props.label ? "-label" : ""}
        ${this.props.size ? `-bt--${this.props.size}` : ""}
      `}
      >
        {this.props.label ? this.props.label : ""}
      </div>
    );
  }
}

/* eslint-disable sort-keys */
Divider.propTypes = {
  /**
   * To render dividers on dark backgrounds.
   */
  inverse: PropTypes.bool,
  /**
   * Add text to a divider .
   */
  label: PropTypes.string,
  /**
   * Customize the dividers size .
   */
  size: PropTypes.oneOf(["1", "2", "3", "4"]),
  /**
   * To render a vertical divider. Ensure the parent container has a height specified.
   */
  vertical: PropTypes.bool,
};
