import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../../UXPinWrapper/react-wrapper";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/drawer/
 * @uxpindescription Drawers are flexible containers anchored to the top, right, bottom, or left of the screen. They are used primarily in Chi for displaying menus on small devices.
 */

export default function Drawer(props) {
  const WrappedDrawer = ReactWrapper("chi-drawer");

  return (
    // <div
    //   style={{
    //     minHeight: "300px",
    //     minWidth: "300px",
    //     width: "100%",
    //     height: "100%",
    //   }}
    // >
    <WrappedDrawer
      {...props}
      style={{
        minHeight: "300px",
        minWidth: "450px",
        width: "100%",
        height: "100%",
      }}
    />
    // </div>
  );
}

// Alert Component PropTypes
Drawer.propTypes = {
  /**
   * The content of the drawer.
   */
  children: PropTypes.node,
  /**
   * To define the drawer title. Not compatible with `noHeader`.
   */
  drawerTitle: PropTypes.string,
  /**
   * To open or close the drawer.
   */
  active: PropTypes.bool,
  /**
   * To set the position of the drawer. Can be `top`, `right`, `bottom`, or `left`.
   */
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /**
   * To add a backdrop behind the drawer, which covers the viewport.
   */
  backdrop: PropTypes.bool,
  /**
   * To remove the space for the header.
   */
  noHeader: PropTypes.bool,

  /**
   * To render the Drawer without a close button. Default is `false`.
   */
  nonClosable: PropTypes.bool,

  /**
   * To define the portal style of the Drawer header. Default is `false`.
   */
  portal: PropTypes.bool,

  /**
   * To prevent closing when the user clicks outside the Drawer. Default is `false`.
   */
  preventAutoHide: PropTypes.bool,

  /**
     * Triggered when the drawer has been hidden from the user, and the animation has completed.

     */
  chiDrawerHidden: PropTypes.func,

  /**
   * Triggered when the drawer hide method is executed, but the closing animation has not started yet.
   */
  chiDrawerHide: PropTypes.func,

  /**
   * Triggered when the drawer show method is executed, but the showing animation has not started yet.
   */
  chiDrawerShow: PropTypes.func,

  /**
   * Triggered when the drawer has been shown to the user and is fully visible, and the animation has completed.
   */
  chiDrawerShown: PropTypes.func,
};
