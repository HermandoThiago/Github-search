import { StyledContainer } from "./styled";

interface IPropsContainer {
  children: React.ReactNode;
}

export function Container({ children }: IPropsContainer) {
  return <StyledContainer>{children}</StyledContainer>;
}
