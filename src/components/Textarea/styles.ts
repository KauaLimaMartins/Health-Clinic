import styled from "styled-components";

export const TextAreaField = styled.textarea`
  width: 100%;
  background: ${({ theme }) => theme.colors.inputBg};
  padding: 1.75rem;

  border: 0;
  border-radius: 1.25rem;

  color: ${({ theme }) => theme.colors.inputText};

  font-family: ${({ theme }) => theme.fonts.input};
  font-weight: 400;

  resize: none;
`;
