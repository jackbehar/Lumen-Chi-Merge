import React, { createContext, useState, useEffect } from "react";
import "./UXPinWrapper.css";
import { CHI_VERSION } from "../../constants/constants";

// Move ThemeContext inside UXPinWrapper
export const ThemeContext = createContext();

export default function UXPinWrapper({ children }) {
  const [themeUrl, setThemeUrl] = useState(
    `https://assets.ctl.io/chi/${CHI_VERSION}/chi-portal.css`
  ); // Default theme URL

  useEffect(() => {
    // Check if the stylesheet is already loaded, and update it if needed
    let chiCss = document.getElementById("chi-css");

    if (!chiCss) {
      chiCss = document.createElement("link");
      chiCss.setAttribute("rel", "stylesheet");
      chiCss.setAttribute("id", "chi-css");
      document.head.appendChild(chiCss);
    }

    // Update the href of the CSS link tag when the themeUrl changes
    chiCss.setAttribute("href", themeUrl);
  }, [themeUrl]); // Effect runs whenever themeUrl changes

  if (!document.getElementById("chi-js")) {
    const chiJs = document.createElement("script");
    chiJs.setAttribute(
      "src",
      `https://assets.ctl.io/chi/${CHI_VERSION}/js/chi.js`
    );
    chiJs.setAttribute("id", "chi-js");
    document.head.appendChild(chiJs);
  }

  if (!document.getElementById("chi-ce-module")) {
    const chiCeModule = document.createElement("script");
    chiCeModule.setAttribute(
      "src",
      `https://assets.ctl.io/chi/${CHI_VERSION}/js/ce/ux-chi-ce/ux-chi-ce.esm.js`
    );
    chiCeModule.setAttribute("type", "module");
    chiCeModule.setAttribute("id", "chi-ce-module");
    document.head.appendChild(chiCeModule);
  }

  if (!document.getElementById("chi-ce-nomodule")) {
    const chiCeNomodule = document.createElement("script");
    chiCeNomodule.setAttribute(
      "src",
      `https://assets.ctl.io/chi/${CHI_VERSION}/js/ce/ux-chi-ce/ux-chi-ce.js`
    );
    chiCeNomodule.setAttribute("nomodule", "");
    chiCeNomodule.setAttribute("id", "chi-ce-nomodule");
    document.head.appendChild(chiCeNomodule);
  }

  const changeTheme = (newUrl) => {
    setThemeUrl(newUrl);
  };

  return (
    <ThemeContext.Provider value={{ themeUrl, changeTheme }}>
      <div className="chi">{children}</div>
    </ThemeContext.Provider>
  );
}
