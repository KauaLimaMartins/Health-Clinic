import styled from "styled-components";

export const Container = styled.header`
  color: ${({ theme }) => theme.colors.white};
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 0 15%;

  nav {
    display: flex;
    align-items: center;

    a {
      font-family: ${({ theme }) => theme.fonts.content};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.textPrimary};
      text-decoration: none;
      margin-right: 1.875rem;
      display: inline-block;
      position: relative;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.primaryRed};
    }

    a:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.primaryRed};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    a:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    svg {
      color: ${({ theme }) => theme.colors.primaryRed};
      cursor: pointer;
    }
  }

  > svg {
    display: none;
    color: ${({ theme }) => theme.colors.primaryRed};
  }

  @media (max-width: 650px) {
    padding: 0 1.875rem;
  }

  @media (max-width: 500px) {
    nav {
      display: none;
    }

    > svg {
      display: inline;
    }
  }
`;
