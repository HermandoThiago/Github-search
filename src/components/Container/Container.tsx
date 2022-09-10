import { StyledContainer } from "./styled";

interface IPropsContainer {
    children: React.ReactNode;
}

export default function Container({ children }: IPropsContainer){
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};