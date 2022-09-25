import { StyledButton } from './styled';

export interface IPropsButton {
    title: string;
    icon?: React.ReactNode;
    color: 'primary' | 'secondary';
    click?: () => void;
}

export default function Button({ 
    title = 'Button', 
    icon, 
    color = 'primary',
    click
 }: IPropsButton){
    return (
        <StyledButton color={color} onClick={click}>
            {icon}{title}
        </StyledButton>
    )
}