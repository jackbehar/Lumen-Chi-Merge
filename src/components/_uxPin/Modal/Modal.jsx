/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/modal/
 * @uxpindescription Accordion is used to toggle between hiding and showing content.
 */
/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function Modal(props) {
  return (
    <div
      className={`
          chi-backdrop
          ${props.open ? '' : '-closed'}
          ${props.center ? '-center' : ''}
                   ${props.animated ? '-animated' : ''}

          `}
      style={{ minHeight: '300px', minWidth: '300px' }}
      ref={props.uxpinRef}
    >
      <div className="chi-backdrop__wrapper">
        <section id="modal-1" className="chi-modal" role="dialog" aria-label="Modal description" aria-modal="true">
          <header className="chi-modal__header">
            <h2 className="chi-modal__title">{props.title}</h2>
            <button className="chi-button -icon -close" data-dismiss="modal" aria-label="Close" onClick={props.onClose}>
              <div className="chi-button__content">
                <i className="chi-icon icon-x" aria-hidden="true"></i>
              </div>
            </button>
          </header>
          <div className="chi-modal__content">
            <p className="-text -m--0">{props.children}</p>
          </div>
          <footer className="chi-modal__footer">{props.footer}</footer>
        </section>
      </div>
    </div>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  center: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
