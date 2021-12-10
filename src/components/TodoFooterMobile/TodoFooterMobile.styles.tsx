import styled from "styled-components";

const TodoFooterMobileStyles = styled.article`
  font-size: 0.875rem;
  padding: 0.75rem 0;
  color: ${(props) => props.theme["dark-grayish-blue"]};
  background-color: ${(props) =>
    props.theme.dark["very-dark-desaturated-blue"]};
  display: grid;
  place-items: center;
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export default TodoFooterMobileStyles;
