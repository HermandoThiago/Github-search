import { StyledFooter } from "./styled";

interface IPropsFooter {
    children: string | React.ReactNode;
}

export default function Footer({ children }: IPropsFooter){
    return (
        <StyledFooter>
            {children}
        </StyledFooter>
    )
}