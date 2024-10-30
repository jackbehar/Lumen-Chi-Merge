import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../UXPinWrapper/react-wrapper";

export default function FormItem(props) {
  return (
    <div className={props.inline ? "chi-form__item -row" : "chi-form__item"}>
      {props.children}
    </div>
  );
}

// Alert Component PropTypes
FormItem.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
};
