import * as PropTypes from 'prop-types';
import React from 'react';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/button-group/
 * @uxpindescription Button groups are used to wrap a series of buttons on a single line.
 */
export default function ButtonGroup(props) {
  const WrappedButtonGroup = ReactWrapper('chi-button-group');

  return (
    <WrappedButtonGroup
      className={`
    chi-button-group
    ${props.direction ? props.direction : ''}
    ${props.fluid ? '-fluid' : ''}
    `}
      {...props}
    >
      {props.children.map((item, key) => {
        return (
          <button
            className={`
            chi-button
    ${props.size ? props.size : ''}
            `}
            type="button"
            {...item.props}
          >
            {item.props.children}
          </button>
        );
      })}
    </WrappedButtonGroup>
  );
}

ButtonGroup.propTypes = {
  /** Buttons inside group
   */
  children: PropTypes.node,
  /** Buttons direction
   */
  direction: PropTypes.oneOf(['-vertical', '-horizontal']),

  /** Disable the button */
  disabled: PropTypes.bool,

  /** Render a button to fill the parent space */
  fluid: PropTypes.bool,

  /** Set button size (xs, sm, md, lg, xl) */
  size: PropTypes.oneOf(['-xs', '-sm', '-md', '-lg', '-xl']),
};
