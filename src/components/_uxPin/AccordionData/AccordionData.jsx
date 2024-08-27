import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../AccordionItem/AccordionItem';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/accordion/
 * @uxpindescription Accordion is used to toggle between hiding and showing content.
 */

function AccordionData(props) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`
      chi-accordion
      ${props.card ? '-card' : ''}
      ${props.truncated ? '-truncated' : ''}
      ${props.size ? props.size : ''}
      `}
    >
      {' '}
      {props.data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

AccordionData.propTypes = {
  // children: PropTypes.node,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  card: PropTypes.bool,
  truncated: PropTypes.bool,
  size: PropTypes.oneOf(['-sm', '-md']),
};

export default AccordionData;
