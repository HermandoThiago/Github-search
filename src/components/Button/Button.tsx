import { StyledButton } from './styled';

interface IPropsButton {
    title: string;
    icon?: React.ReactNode;
    color: 'primary' | 'secondary';
}

export default function Button({ title, icon, color }: IPropsButton){
    return (
        <StyledButton color={color}>
            {icon}{title}
        </StyledButton>
    )
}