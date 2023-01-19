import { ReactNode } from "react";
import { Button } from "./styles";

interface IconButtonProps {
  children: ReactNode;
}

export function IconButton({ children }: IconButtonProps) {
  return <Button>{children}</Button>;
}
