import { ReactNode } from "react";
import { Container } from "./styles";

interface RedButtonProps {
  children: ReactNode;
  type: "submit" | "button";
  disabled?: boolean;
}

export function RedButton({ children, type, disabled }: RedButtonProps) {
  return (
    <Container type={type} disabled={disabled}>
      {children}
    </Container>
  );
}
