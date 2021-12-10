import styled from "styled-components";

const TodoFilterStyles = styled.div`
  display: flex;
  gap: 0 1rem;
  color: ${(props) => props.theme.foot};
  p {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.logo};
    }
  }
  .active {
    color: ${(props) => props.theme["bright-blue"]};
  }
`;

export default TodoFilterStyles;
