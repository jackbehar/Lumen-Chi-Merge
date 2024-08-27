import * as PropTypes from 'prop-types';
import React from 'react';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/button/
 * @uxpindescription Buttons are used to trigger actions in forms, modals, and more.
 */
export default function Button(props) {
  const WrappedButton = ReactWrapper('chi-button');

  return <WrappedButton {...props} />;
}

Button.propTypes = {
  /** Children components inside the Button
   */
  children: PropTypes.node,

  /** Alternative text in case of icon buttons */
  alternativeText: PropTypes.string,

  /** Center align the text */
  center: PropTypes.bool,

  /** Set button color (primary, secondary, danger, dark, light) */
  color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'dark', 'light']),

  /** Disable the button */
  disabled: PropTypes.bool,

  /** Render a button to fill the parent space */
  fluid: PropTypes.bool,

  /** Set button size (xs, sm, md, lg, xl) */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  /** Set button type (float, close, icon) */
  type: PropTypes.oneOf(['float', 'close', 'icon']),

  /** Render a button with uppercase text */
  uppercase: PropTypes.bool,

  /** Set variant of a button (outline, flat) */
  variant: PropTypes.oneOf(['outline', 'flat']),

  /** Custom event when the button is clicked */
  onChiClick: PropTypes.func,

  /** Custom event when the mouse pointer is moved onto the button */
  onChiMouseEnter: PropTypes.func,

  /** Custom event when the mouse pointer is moved out of the button */
  onChiMouseLeave: PropTypes.func,
};
