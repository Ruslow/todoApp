import styled from "styled-components";

const TodoBoxStyles = styled.section`
  margin: 1rem 0;
  color: ${(props) => props.theme.text};
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: ${(props) => props.theme["box-bg"]};
  transition: all 0.5s;
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  @media screen and (min-width: 1440px) {
    margin-top: 1.75rem;
  }
`;

export default TodoBoxStyles;
