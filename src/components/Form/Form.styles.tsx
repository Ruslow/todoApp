import styled from "styled-components";

const FormStyles = styled.form`
  .form-control {
    padding: 1rem 1.25rem;
    display: flex;
    gap: 0 0.75rem;
    background-color: ${(props) => props.theme["box-bg"]};
    border-radius: 0.375rem;
  }
  .form-btn {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid ${(props) => props.theme.circle};
    border-radius: 9999px;
    background-color: inherit;
    cursor: pointer;
  }
  .form-input {
    color: ${(props) => props.theme.text};
    background-color: inherit;
    border: 0;
    font-family: "Josefin Sans", sans-serif;
    font-size: 0.75rem;
    outline: none;
  }

  .form-input::placeholder {
    color: ${(props) => props.theme.foot};
  }

  @media screen and (min-width: 1440px) {
    .form-control {
      gap: 0 1.25rem;
      transition: all 0.5s;
      padding: 1.25rem 1.25rem;
    }
    .fotm-btn {
      width: 1.75rem;
      height: 1.75rem;
    }
    .form-input {
      font-size: 1rem;
    }
  }
`;

export default FormStyles;
