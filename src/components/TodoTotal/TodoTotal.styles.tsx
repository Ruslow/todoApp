import styled from "styled-components";

const TodoTotalStyles = styled.article`
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.foot};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    display: none;
    p:last-child {
      cursor: pointer;
    }
  }
`;

export default TodoTotalStyles;
