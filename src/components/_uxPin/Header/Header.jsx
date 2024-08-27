import * as PropTypes from 'prop-types';
import React from 'react';

/**
 * @uxpindocurl https://lib.lumen.com/chi/6.3.0/components/header/
 * @uxpindescription Headers are used to render consistent Lumen branded headers.
 */
export default function Header(props) {
  return (
    <header
      className={`
      chi-header
      ${props.size ? props.size : ''}
      ${props.impersonation ? '-impersonation' : ''}
      `}
    >
      {props.impersonation ? (
        <div className="chi-impersonation-bar">
          <div className="chi-impersonation-bar__content">
            <span className="chi-impersonation-bar__label">Signed in as:</span>
            <strong className="chi-impersonation-bar__username">User</strong>
            <div className="chi-impersonation-bar__divider chi-divider -vertical -h--75"></div>
            <button
              className="chi-button -flat -xs -icon"
              id="button-portal-logout"
              aria-label="Sign out"
              data-tooltip="Sign out"
              data-position="bottom"
              type="button"
            >
              <div className="chi-button__content">
                <i className="chi-icon icon-logout" aria-hidden="true"></i>
              </div>
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
      <nav className="chi-header__content">
        <div className="chi-header__brand">
          <a className="chi-brand" href="#" aria-label="Lumen">
            {props.brand}
          </a>
          <span className="chi-header__title -d--none -d-sm--flex">{props.title}</span>
        </div>
        <div className="chi-header__start">
          <div className="-d--flex -d-lg--none">
            <button
              className="chi-button -icon -flat chi-drawer__trigger"
              id="drawer-trigger-portal-pib"
              data-target="#drawer-1"
              aria-label="Toggle navigation"
            >
              <div className="chi-button__content">
                <i className="chi-icon -sm--2 icon-menu" aria-hidden="true"></i>
              </div>
            </button>
            {props.startContent}
          </div>
        </div>
        <div className="chi-header__end">
          <div className="-align-items--center -d--none -d-lg--flex">{props.endContent}</div>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  brand: PropTypes.node,
  title: PropTypes.node,
  size: PropTypes.oneOf(['-md', '-lg', '-xl']),
  startContent: PropTypes.node,
  endContent: PropTypes.node,
  impersonation: PropTypes.bool,
};

Header.defaultProps = {};
