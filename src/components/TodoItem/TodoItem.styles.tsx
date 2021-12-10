import styled from "styled-components";

const TodoItemStyles = styled.li`
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.circle};
  cursor: pointer;
  & > div {
    display: flex;
    gap: 0 0.75rem;
    align-items: center;
  }
  & > img {
    width: 1rem;
  }
  &:hover > img {
    display: block;
  }
  & > div > button {
    transition: 0.3s;
    background-color: inherit;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid ${(props) => props.theme.circle};
    display: grid;
    place-items: center;
    border-radius: 9999px;
    cursor: pointer;
  }
  &:hover > div > button {
    border: 1px solid ${(props) => props.theme.text};
    border-left-color: ${(props) => props.theme.fr};
    border-right-color: ${(props) => props.theme.to};
    border-bottom-color: ${(props) => props.theme.to};
    border-top-color: ${(props) => props.theme.fr};
  }

  .circleActive {
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.fr},
      ${(props) => props.theme.to}
    );
  }

  .checkHide {
    display: none;
  }
  .pActive {
    color: ${(props) => props.theme.circle};
    text-decoration: line-through;
  }
  @media screen and (min-width: 1440px) {
    padding: 1.25rem 1.25rem;
    /* gap: 0 1.25rem; */
    & > img {
      display: none;
    }

    & > div > div {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;

/* .circleActive {
    background: linear-gradient(
      to bottom right,
      ${(props) => props.theme.primary.fr},
      ${(props) => props.theme.primary.to}
    );
  } */

export default TodoItemStyles;
