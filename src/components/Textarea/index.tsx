import { FormEvent } from "react";
import { TextAreaField } from "./styles";

interface TextAreaField {
  placeholder: string;
  value: string;
  onChange: (e: FormEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ placeholder, onChange, value }: TextAreaField) {
  return (
    <TextAreaField
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></TextAreaField>
  );
}
