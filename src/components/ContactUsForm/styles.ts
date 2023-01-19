import styled from "styled-components";

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 3.75rem 1.875rem;
  width: 90%;
  border-radius: 0.625rem;
  box-shadow: 7px 7px 15px #9c9c9c29;

  main {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;

    > div {
      width: 60%;
      display: flex;
      flex-direction: column;
      margin-right: 1.25rem;

      > input {
        margin-bottom: 1.25rem;
      }
    }

    > textarea {
      width: 40%;
    }
  }

  > button {
    display: block;
    float: right;
  }

  @media (max-width: 700px) {
    main {
      flex-direction: column;

      > div {
        width: 100%;
        margin-right: 0;
      }

      > textarea {
        width: 100%;
        height: 9.375rem;
        margin-top: 1.25rem;
      }
    }
  }

  @media (max-width: 400px) {
    padding: 2.5rem 0.938rem;
    width: 95%;
  }
`;
