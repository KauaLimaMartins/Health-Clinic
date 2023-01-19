import styled from "styled-components";

export const Container = styled.div`
  background: #575756;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.875rem 0;

  .top-container {
    display: flex;
    align-items: center;
    width: 80%;
    padding-bottom: 1.25rem;

    nav {
      display: block;
      margin: 0 auto;
      padding-left: 5.625rem;

      a {
        font-family: ${({ theme }) => theme.fonts.content};
        font-weight: 400;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        margin-right: 1.875rem;
      }

      a:last-of-type {
        margin-right: 0;
      }
    }

    > div {
      display: block;
      float: right;

      a {
        margin-right: 1rem;

        svg {
          color: ${({ theme }) => theme.colors.white};
        }
      }

      a:last-of-type {
        margin-right: 0;
      }
    }
  }

  .bottom-container {
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding-top: 1.25rem;

    p {
      font-family: ${({ theme }) => theme.fonts.content};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 730px) {
    .top-container {
      flex-direction: column-reverse;

      nav {
        padding-left: 0;
        margin-top: 1.25rem;
      }
    }
  }

  @media (max-width: 500px) {
    padding: 1.563rem 1.25rem;
    text-align: center;

    .top-container {
      width: 100%;
    }

    .bottom-container {
      width: 100%;
    }
  }

  @media (max-width: 430px) {
    .top-container {
      nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        a {
          margin-right: 0;
          margin-top: 0.625rem;
        }
      }
    }
  }
`;
