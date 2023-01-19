import { FormEvent } from "react";
import { InputField } from "./styles";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type: "email" | "text";
}

export function Input({ placeholder, type, value, onChange }: InputProps) {
  return (
    <InputField
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
