import React, { useContext } from "react";
import { ThemeContext } from "../../UXPinWrapper/UXPinWrapper"; // Import ThemeContext from UXPinWrapper
import { CHI_VERSION } from "../../../constants/constants";
import * as PropTypes from "prop-types";

const ThemeSwitcher = (props) => {
  const { changeTheme } = useContext(ThemeContext); // Get the function to change the theme

  React.useEffect(
    // Change theme when 'theme' prop changes
    () =>
      changeTheme(
        `https://assets.ctl.io/chi/${CHI_VERSION}/${props.theme}.css`
      ),
    [props]
  );

  return (
    <div //A visual aid for the designer to see in UXPin
      style={{
        width: "160px",
        color: "white",
        textAlign: "center",
        background: "#003087",
        borderRadius: 10,
        padding: "20px",
      }}
    >
      <strong>ThemeCustomizer:</strong>
      <br />
      Please move this <br />
      marker offscreen
    </div>
  );
};
ThemeSwitcher.propTypes = {
  /**
   * Selecting a theme will change all components in prototype
   */
  theme: PropTypes.oneOf(["chi", "chi-portal", "chi-centurylink"]),
};

export default ThemeSwitcher;
