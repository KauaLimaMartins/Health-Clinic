import { FormEvent, ReactNode } from "react";
import { SelectField } from "./styles";

interface SelectProps {
  placeholder: string;
  children: ReactNode;
  value: string;
  onChange: (e: FormEvent<HTMLSelectElement>) => void;
}

export function Select({
  placeholder,
  children,
  value,
  onChange,
}: SelectProps) {
  return (
    <SelectField value={value} onChange={onChange}>
      <option value="default" disabled>
        {placeholder}
      </option>
      {children}
    </SelectField>
  );
}
