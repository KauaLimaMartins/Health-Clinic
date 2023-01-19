import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  backdrop-filter: blur(2px);
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.8);
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    position: fixed;
    top: 5%;
    right: 4%;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryRed};
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      font-family: ${({ theme }) => theme.fonts.content};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      margin-bottom: 1.25rem;
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
`;
