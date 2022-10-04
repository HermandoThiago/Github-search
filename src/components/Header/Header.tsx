import { StyledHeader } from "./styled";

export interface IPropsHeader {
  children: string | React.ReactNode;
}

export function Header({ children }: IPropsHeader) {
  return <StyledHeader>{children}</StyledHeader>;
}
