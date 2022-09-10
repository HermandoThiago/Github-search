import { StyledButton } from './styled';

interface IPropsButton {
    title: string;
    icon?: React.ReactNode;
    color: 'primary' | 'secondary';
    click?: () => void;
}

export default function Button({ 
    title, 
    icon, 
    color,
    click
 }: IPropsButton){
    return (
        <StyledButton color={color} onClick={click}>
            {icon}{title}
        </StyledButton>
    )
}