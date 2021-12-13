import React from "react";
import sun from "../../assets/images/icon-sun.svg";
import moon from "../../assets/images/icon-moon.svg";
import NavbarStyles from "./Navbar.styles";
import { useMyContext } from "../../context/Context";

export const Navbar = () => {
  const { dispatch, state } = useMyContext();
  const switchImages = state.theme === "dark" ? sun : moon;
  const handleSwitch = () => {
    dispatch({ type: "switchTheme" });
  };
  return (
    <NavbarStyles>
      <h2 className="nav-logo">todo</h2>
      <img
        onClick={handleSwitch}
        className="nav-switcher"
        src={switchImages}
        alt={"switch color theme."}
      />
    </NavbarStyles>
  );
};
