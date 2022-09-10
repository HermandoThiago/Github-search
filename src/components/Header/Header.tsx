import { StyledHeader } from "./styled"

interface IPropsHeader {
    children: string | React.ReactNode;
}

export default function Header({ children }: IPropsHeader){
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}