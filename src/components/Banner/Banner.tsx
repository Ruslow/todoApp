import React from "react";
import { useMyContext } from "../../context/Context";
import { BannerLight, BannerStyles } from "./Banner.styles";

const Banner = () => {
  const { state } = useMyContext();
  return state.theme === "dark" ? <BannerStyles /> : <BannerLight />;
};

export default Banner;
