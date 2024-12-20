import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../UXPinWrapper/react-wrapper";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/forms/text-input/
 * @uxpindescription Text inputs are used for inputting single line text data.
 */
export default function TextInput(props) {
  const WrappedTextInput = ReactWrapper("chi-text-input");

  return <WrappedTextInput {...props} />;
}

// Alert Component PropTypes
TextInput.propTypes = {
  /** To show copy text icon */
  copyText: PropTypes.bool,

  /** To disable Text input */
  disabled: PropTypes.bool,

  /** To display an additional helper text message below the Text input */
  helperMessage: PropTypes.string,

  /** To add a left positioned icon */
  iconLeft: PropTypes.string,

  /** To define color of left icon */
  iconLeftColor: PropTypes.oneOf([
    "danger",
    "dark",
    "grey",
    "info",
    "light",
    "muted",
    "navy",
    "orange",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),

  /** To add a right positioned icon */
  iconRight: PropTypes.string,

  /** To define color of right icon */
  iconRightColor: PropTypes.oneOf([
    "danger",
    "dark",
    "grey",
    "info",
    "light",
    "muted",
    "navy",
    "orange",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),

  /** To define name of Text input */
  name: PropTypes.string,

  /** To define placeholder of Text input */
  placeholder: PropTypes.string,

  /** To disable Value attribute mutation */
  preventValueMutation: PropTypes.bool,

  /** To prevent the Text input value from being changed */
  readonly: PropTypes.bool,

  /** To define size of Text input */
  size: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]),

  /** To render Text Input with Spinner */
  spinner: PropTypes.bool,

  /** To define state color of Text input */
  state: PropTypes.oneOf(["danger", "success", "warning"]),

  /** To define type of Text input */
  type: PropTypes.oneOf([
    "date",
    "datetime",
    "datetime-local",
    "email",
    "month",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ]),

  /** To define value of Text input */
  value: PropTypes.string,

  /** Triggered when the element has lost focus. */
  chiBlur: PropTypes.func,

  /** Triggered when an alteration to the element's value is committed by the user. */
  chiChange: PropTypes.func,

  /** Triggered when the user sets focus on the element. */
  chiFocus: PropTypes.func,

  /** Triggered when the user changed the element's value but did not commit the change yet. */
  chiInput: PropTypes.func,
};
