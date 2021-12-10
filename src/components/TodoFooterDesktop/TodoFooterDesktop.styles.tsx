import styled from "styled-components";

const TodoFooterDesktopStyles = styled.article`
  display: none;
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.foot};
  transition: all 0.5s;
  p:last-child {
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: ${(props) => props.theme.logo};
    }
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }
`;

export default TodoFooterDesktopStyles;
