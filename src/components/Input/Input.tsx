import { ChangeEvent } from "react";
import { StyledInput } from "./styled";

export interface IPropsInput {
  placeholder: string;
  type: string;
  change: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
}

export function Input({
  placeholder = "placeholder",
  type = "text",
  change,
  value,
}: IPropsInput) {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      onChange={change}
      value={value}
    />
  );
}
