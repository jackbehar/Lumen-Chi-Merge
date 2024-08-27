import React from 'react';
import PropTypes from 'prop-types';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/accordion/
 * @uxpindescription Accordion is used to toggle between hiding and showing content.
 */
function AccordionItem(props) {
  const [isOpen, setIsOpen] = React.useState(props.isOpen);

  React.useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className={`chi-accordion__item  ${isOpen ? '-expanded' : ''}`}>
      <button
        className={`chi-accordion__trigger ${props.disabled ? '-disabled' : ''}`}
        type="button"
        onClick={handleToggle}
      >
        <i className="chi-icon icon-chevron-down" aria-hidden="true"></i>
        <div className="chi-accordion__title">{props.title}</div>
      </button>
      {isOpen && (
        <div className="chi-accordion__content">
          <p className="chi-accordion__text">{props.content}</p>
        </div>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.node,
  content: PropTypes.node,

  /**
   * If `true`, the switch is checked.
   */
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  // key: PropTypes.string,
};

export default AccordionItem;
