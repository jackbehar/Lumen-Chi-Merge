import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Sidenav Component
const Sidenav = ({ items, openOnHover, autoClose }) => {
  useEffect(() => {
    // Initialize Chi sidenav after the component mounts
    const sidenavElement = document.getElementById("sidenav-1");
    if (sidenavElement) {
      chi.sidenav(sidenavElement, {
        openOnHover: true,
        autoClose: true,
      });
    }
  }, []);

  const [activeDrawer, setActiveDrawer] = useState(null);

  const handleDrawerToggle = (index) => {
    setActiveDrawer(activeDrawer === index ? null : index);
  };

  return (
    <aside className="chi-sidenav -float" id="sidenav-1">
      <div className="chi-sidenav__content">
        <nav>
          <ul className="chi-sidenav__list">
            {items.map((item, index) => (
              <li
                key={index}
                className={activeDrawer === index ? "-active" : ""}
              >
                <a
                  href={`#drawer-${index + 1}`}
                  onClick={() => handleDrawerToggle(index)}
                >
                  <i className={`chi-icon ${item.icon}`} aria-hidden="true"></i>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="chi-sidenav__drawers">
        {items.map((item, index) => (
          <div
            key={index}
            className={`chi-drawer -animated -left ${
              activeDrawer === index ? "-open" : ""
            }`}
            id={`drawer-${index + 1}`}
          >
            <div className="chi-drawer__header">
              <div className="chi-drawer__title">{item.drawerTitle}</div>
              <button
                className="chi-button -icon -close"
                aria-label="Close"
                onClick={() => handleDrawerToggle(null)}
              >
                <div className="chi-button__content">
                  <i className="chi-icon icon-x" aria-hidden="true"></i>
                </div>
              </button>
            </div>
            <div className="chi-drawer__content">
              <div className="chi-accordion">
                {item.accordionItems.map((accordionItem, aIndex) => (
                  <div
                    key={aIndex}
                    className={`chi-accordion__item ${
                      accordionItem.isActive ? "-active" : ""
                    }`}
                  >
                    <button className="chi-accordion__trigger">
                      <div className="chi-accordion__title">
                        {accordionItem.title}
                      </div>
                      <i
                        className="chi-icon icon-chevron-down"
                        aria-hidden="true"
                      ></i>
                    </button>
                    <div className="chi-accordion__content">
                      {accordionItem.subItems.map((subItem, sIndex) => (
                        <a key={sIndex} href={subItem.href}>
                          <span>{subItem.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a href="#externalLink">
                  <span>
                    External
                    <i
                      className="chi-icon icon-external-link -xs"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

Sidenav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      drawerTitle: PropTypes.string.isRequired,
      accordionItems: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          isActive: PropTypes.bool,
          subItems: PropTypes.arrayOf(
            PropTypes.shape({
              title: PropTypes.string.isRequired,
              href: PropTypes.string.isRequired,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  openOnHover: PropTypes.bool,
  autoClose: PropTypes.bool,
};

export default Sidenav;
