import * as PropTypes from 'prop-types';
import React from 'react';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/alert/
 * @uxpindescription Alert messages provide contextual feedback for user actions.
 */
export default function UxpAlert(props) {
  const WrappedAlert = ReactWrapper('chi-alert');

  return <WrappedAlert {...props} />;
}

// Alert Component PropTypes
UxpAlert.propTypes = {
  /** Center the alert content */
  center: PropTypes.bool,

  /** Children components inside the Alert */
  children: PropTypes.node,

  /** Make the alert dismissible */
  closable: PropTypes.bool,

  /** Set the alert state */
  color: PropTypes.oneOf(['danger', 'info', 'muted', 'success', 'warning']),

  /** Set the alert expiration time (in seconds) */
  expirationTime: PropTypes.number,

  /** Avoid the necessity of adding <chi-icon> to alert markup */
  icon: PropTypes.node,

  /** Hide the alert when dismissed */
  mutable: PropTypes.bool,

  /** Set alert size (sm, md, lg) */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /** Render alert with a Spinner */
  spinner: PropTypes.bool,

  /** Define the alert title */
  title: PropTypes.string,

  /** Set alert type (bubble, banner, toast) */
  type: PropTypes.oneOf(['bubble', 'toast', 'clickable']),

  /** custom event when trying to dismiss an alert. */
  dismissAlert: PropTypes.func,

};
