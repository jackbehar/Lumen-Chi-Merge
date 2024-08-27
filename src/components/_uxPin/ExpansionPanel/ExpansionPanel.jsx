import React from 'react';
import * as PropTypes from 'prop-types';
import ReactWrapper from '../../UXPinWrapper/react-wrapper';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/expansion-panel/
 * @uxpindescription Expansion panels organize content into collapsible panels and reveal them to users in a progressive, step-by-step way.
 */
export default function ExpansionPanel(props) {
  const WrappedExpansionPanel = ReactWrapper('chi-expansion-panel');

  return (
    <WrappedExpansionPanel {...props}>
      <div slot="active">{props.activeContent}</div>
      <div slot="done">{props.doneContent}</div>
      <div slot="change">{props.changeContent}</div>
      <div slot="footer">{props.footerContent}</div>
    </WrappedExpansionPanel>
  );
}

ExpansionPanel.propTypes = {
  /**
   * to set expansion panel state. Possible values are: {'done', 'active', 'pending' (default value), and 'disabled'}.
   */
  state: PropTypes.oneOf(['done', 'active', 'pending', 'disabled', 'next', 'previous']),
  /**
   * to define expansion panel title.
   */
  title: PropTypes.string,
  /**
   * to set a step number next to the title of the panel.
   */
  step: PropTypes.string,
  /**
   * 'Active' state content.
   */
  activeContent: PropTypes.node,
  /**
   * 'Done' state content.
   */
  doneContent: PropTypes.node,
  /**
   * 'Change' state content.
   */
  changeContent: PropTypes.node,
  /**
   * 'Footer' content.
   */
  footerContent: PropTypes.node,
  /**
   * to set the panel style to bordered.
   */
  bordered: PropTypes.bool,
  /**
   * to set the title of the panel.
   * @uxpinignoreprop
   */
  epanelTitle: PropTypes.string,
  /**
   * to render a state icon within the panel.
   */
  stateIcon: PropTypes.bool,
  /**
   * to render a state tooltip.
   */
  stateIconTooltip: PropTypes.string,
};

ExpansionPanel.defaultProps = {};
