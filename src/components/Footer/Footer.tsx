import { StyledFooter } from "./styled";

export interface IPropsFooter {
    children: string | React.ReactNode;
}

export default function Footer({ children }: IPropsFooter){
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    )
}