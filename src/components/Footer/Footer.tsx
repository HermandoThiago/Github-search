import { StyledFooter } from "./styled";

export interface IPropsFooter {
  children: string | React.ReactNode;
}

export function Footer({ children }: IPropsFooter) {
  return <StyledFooter>{children}</StyledFooter>;
}
