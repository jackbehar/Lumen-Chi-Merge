import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../UXPinWrapper/react-wrapper";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/label/
 * @uxpindescription Use Label together with form control elements like input, select, checkbox, etc.
.
 */
export default function Label(props) {
  const WrappedLabel = ReactWrapper("chi-label");

  return <WrappedLabel {...props} />;
}

// Alert Component PropTypes
Label.propTypes = {
  /** To text of the Label
   * @uxpinpropname Label
   */
  children: PropTypes.string,

  /** To indicate ID of target form control web component */
  for: PropTypes.string,

  /** To indicate if info icon should be displayed */
  infoIcon: PropTypes.bool,

  /** To provide message for info icon popover */
  infoIconMessage: PropTypes.string,

  /** To indicate which form field is optional */
  optional: PropTypes.bool,

  /** To indicate which form field is required */
  required: PropTypes.bool,

  /** OPTIONAL. Size of the label. { xs, sm, md, lg, xl } */
  size: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]),
};
