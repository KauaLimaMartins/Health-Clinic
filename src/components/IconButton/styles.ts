import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 1.125rem 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.625rem;

  font-family: ${({ theme }) => theme.fonts.content};
  font-weight: 400;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryRed};

  transition: 0.2s;

  svg {
    margin-right: 0.313rem;
  }

  &:hover {
    filter: brightness(95%);
  }
`;
