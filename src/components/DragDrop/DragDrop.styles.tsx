import styled from "styled-components";

const DragDropStyles = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.circle};
  margin-top: 3rem;
  font-size: 0.875rem;

  @media screen and (min-width: 1440px) {
    font-size: 1rem;
  }
`;

export default DragDropStyles;
