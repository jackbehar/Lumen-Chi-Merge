import React from 'react';
import * as PropTypes from 'prop-types';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/expansion-panel/
 * @uxpindescription Expansion panels organize content into collapsible panels and reveal them to users in a progressive, step-by-step way.
 */

export default function ExpansionPanelGroup(props) {
  return <div>{props.children}</div>;
}

ExpansionPanelGroup.propTypes = {
  /**
   * the collection of Expansion Panels.
   */
  children: PropTypes.node,
};

ExpansionPanelGroup.defaultProps = {};
