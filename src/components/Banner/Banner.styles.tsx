import styled from "styled-components";
import darkMobile from "../../assets/images/bg-mobile-dark.jpg";
import lightMobile from "../../assets/images/bg-mobile-light.jpg";
import darkDesktop from "../../assets/images/bg-desktop-dark.jpg";
import lightDesktop from "../../assets/images/bg-desktop-light.jpg";

export const BannerStyles = styled.header`
  position: absolute;
  inset: 0;
  height: 25%;
  background-image: url(${darkMobile});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 1440px) {
    background-image: url(${darkDesktop});
    height: 33%;
  }
`;

export const BannerLight = styled(BannerStyles)`
  background-image: url(${lightMobile});
  @media screen and (min-width: 1440px) {
    background-image: url(${lightDesktop});
    height: 33%;
  }
`;
