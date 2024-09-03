import * as PropTypes from "prop-types";
import React from "react";
import ReactWrapper from "../../UXPinWrapper/react-wrapper";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/pagination/
 * @uxpindescription Use pagination to separate long sets of data so that it is easier for a user to consume information.
 */

export default function UxpPagination(props) {
  const WrappedPagination = ReactWrapper("chi-pagination");

  return (
    // <div
    //   style={{
    //     minHeight: "300px",
    //     minWidth: "300px",
    //     width: "100%",
    //     height: "100%",
    //   }}
    // >
    <WrappedPagination {...props} />
    // </div>
  );
}

// Alert Component PropTypes
UxpPagination.propTypes = {
  /**
   * To define the aria label of pagination.
   */
  ariaLabel: PropTypes.string,

  /**
   * To define the compact style of pagination.
   */
  compact: PropTypes.bool,

  /**
   * To define the current page of pagination.
   */
  currentPage: PropTypes.number,

  /**
   * To add First page / Last page icon buttons.
   */
  firstLast: PropTypes.bool,

  /**
   * To render inverse styled pagination.
   */
  inverse: PropTypes.bool,

  /**
   * To add a jump to page text input.
   */
  pageJumper: PropTypes.bool,

  /**
   * To allow the user to select the number of items to show per page.
   */
  pageSize: PropTypes.bool,

  /**
   * To define the number of pages to render.
   */
  pages: PropTypes.number,

  /**
   * To show the number of result items.
   */
  results: PropTypes.number,

  /**
   * To define the size of pagination elements.
   */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),

  /**
   * Triggered when the user navigates to another page by clicking pagination item buttons or changing the value of the Page Jumper input.
   */
  chiPageChange: PropTypes.func,

  /**
   * Triggered when the user changes the items per page value.
   */
  chiPageSizeChange: PropTypes.func,
};
