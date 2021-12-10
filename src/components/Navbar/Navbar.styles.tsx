import styled from "styled-components";

const NavbarStyles = styled.nav`
  position: relative;
  z-index: 10;
  color: ${(props) => props.theme.logo};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
  padding: 0 1.75rem;
  .nav-logo {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.875rem;
    letter-spacing: 0.35em;
  }
  .nav-switcher {
    cursor: pointer;
  }

  @media screen and (min-width: 1440px) {
    .nav-logo {
      font-size: 2.25rem;
    }
  }
`;

export default NavbarStyles;
