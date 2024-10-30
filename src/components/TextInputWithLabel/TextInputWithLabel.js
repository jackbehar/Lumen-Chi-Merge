import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../UXPinWrapper/react-wrapper";

export default function TextInputWithLabel(props) {
  const WrappedTextInput = ReactWrapper("chi-text-input");
  const WrappedTextLabel = ReactWrapper("chi-label");

  const {
    inline,
    label,
    labelFor,
    labelInfoIcon,
    labelInfoIconMessage,
    labelOptional,
    labelRequired,
    labelSize,
    ...restProps
  } = props;

  return (
    <div className={props.inline ? "chi-form__item -row" : "chi-form__item"}>
      <WrappedTextLabel
        required={labelRequired}
        for={labelFor}
        infoIcon={labelInfoIcon}
        infoIconMessage={labelInfoIconMessage}
        optional={labelOptional}
        size={labelSize}
      >
        {label}
      </WrappedTextLabel>
      <WrappedTextInput {...restProps} />
    </div>
  );
}

TextInputWithLabel.propTypes = {
  /** Display Label next to field */
  inline: PropTypes.bool,

  /** Text of label*/
  label: PropTypes.node,

  /** To indicate ID of target form control web component */
  labelFor: PropTypes.string,

  /** To indicate if info icon should be displayed*/
  labelInfoIcon: PropTypes.bool,

  /** To provide message for info icon popover */
  labelInfoIconMessage: PropTypes.string,

  /** To indicate which form field is optional */
  labelOptional: PropTypes.bool,

  /** To indicate which form field is required */
  labelRequired: PropTypes.bool,

  /** OPTIONAL. Size of the label. { xs, sm, md, lg, xl } */
  labelSize: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]),

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
