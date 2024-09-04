import * as PropTypes from "prop-types";
import React from "react";
import Divider from "../../Divider/Divider";

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/toolbar/
 * @uxpindescription Toolbar provides the ability of performing actions such as searching for elements and filtering complex structures.
 */
export default function Toolbar(props) {
  return (
    <div class="chi-toolbar">
      <div class="chi-toolbar__header">
        <div class="chi-toolbar__start">
          <div class="chi-toolbar__views">
            <div class="chi-toolbar__views-desktop">{props.children}</div>
            <div class="chi-toolbar__views-mobile">{props.children}</div>
          </div>
        </div>

        <div class="chi-toolbar__end">
          <div class="chi-toolbar__actions">
            <div class="chi-toolbar__actions-desktop">
              {props.actionsDesktop}
            </div>
            <div class="chi-toolbar__actions-mobile">{props.actionsMobile}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Toolbar.propTypes = {
  /** Nested components used in Toolbar Start section
   */
  children: PropTypes.node,
  actionsDesktop: PropTypes.node,
  actionsMobile: PropTypes.node,
};

Toolbar.defaultProps = {};
