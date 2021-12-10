import styled from "styled-components";

const EmptyListStyle = styled.div`
  & > p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.05em;
    font-size: 1rem;
  }
  @media screen and (min-width: 1440px) {
    min-height: 345px;
    & > p {
      font-size: 1.25rem;
    }
  }
`;

export default EmptyListStyle;
