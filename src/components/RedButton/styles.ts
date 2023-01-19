import styled from "styled-components";

export const Container = styled.button`
  font-family: ${({ theme }) => theme.fonts.content};
  font-weight: 700;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primaryRed};
  padding: 0.75rem 2rem;

  border: 0;
  border-radius: 0.625rem;

  transition: 0.2s;

  &:hover {
    filter: brightness(95%);
  }

  &:disabled {
    cursor: not-allowed;
    filter: brightness(80%);
  }
`;
