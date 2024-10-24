import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../../UXPinWrapper/react-wrapper";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/popover/
 * @uxpindescription Popovers provide a contextual space attached to an element in an upper z-index layer where you can include any kind of HTML code related to the trigger.
 */
export default function Popper(props) {
  const WrappedPopper = ReactWrapper("chi-popover");

  return (
    <div
      style={{
        minWidth: 100,
        minHeight: 52,
      }}
    >
      <WrappedPopper {...props} />
    </div>
  );
}

// Alert Component PropTypes
Popper.propTypes = {
  /** Children components inside the Popover */
  children: PropTypes.node,
  /**
   * Controls whether the popover is open or closed.
   */
  active: PropTypes.bool,

  /**
   * Adds an arrow between the popover and the reference element.
   */
  arrow: PropTypes.bool,

  /**
   * Adds a close button to the popover.
   */
  closable: PropTypes.bool,

  /**
   * Allows the user to manually change the position of the popover.
   */
  drag: PropTypes.bool,

  /**
   * Defines whether the popover should have a modal style.
   */
  modal: PropTypes.bool,

  /**
   * Defines the title of the popover.
   */
  popoverTitle: PropTypes.string,

  /**
   * Defines whether the popover should use a portal style.
   */
  portal: PropTypes.bool,

  /**
   * Sets the position of the popover.
   * Options: "auto", "auto-end", "auto-start", "bottom", "bottom-end", "bottom-start", "left", "left-end", "left-start", "right", "right-end", "right-start", "top", "top-end", "top-start".
   */
  position: PropTypes.oneOf([
    "auto",
    "auto-end",
    "auto-start",
    "bottom",
    "bottom-end",
    "bottom-start",
    "left",
    "left-end",
    "left-start",
    "right",
    "right-end",
    "right-start",
    "top",
    "top-end",
    "top-start",
  ]),

  /**
   * Prevents closing the popover when clicking outside its bounds.
   */
  preventAutoHide: PropTypes.bool,

  /**
   * CSS selector to reference an element, e.g., "#id > p".
   */
  reference: PropTypes.string,

  /**
   * Defines the title of the popover.
   */
  title: PropTypes.string,

  /**
   * Defines the variant of the popover.
   * Options: "text", "custom".
   */
  variant: PropTypes.oneOf(["text", "custom"]),

  // Event PropTypes

  /**
   * Event triggered when the popover is hidden and the animation has completed.
   */
  chiPopoverHidden: PropTypes.func,

  /**
   * Event triggered when the popover hide method is executed, but the closing animation has not yet started.
   */
  chiPopoverHide: PropTypes.func,

  /**
   * Event triggered when the popover show method is executed, but the showing animation has not yet started.
   */
  chiPopoverShow: PropTypes.func,

  /**
   * Event triggered when the popover is fully visible and the animation has completed.
   */
  chiPopoverShown: PropTypes.func,
};
