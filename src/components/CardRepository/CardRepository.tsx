import { 
    StyledCardRepository, 
    StyledCardTitle,
    StyledCardDescription,
    StyledContainerButton
} from './styled';
import Button from '../Button/Button';
import { AiOutlineGithub, AiOutlineHeart } from 'react-icons/ai';

interface IPropsCardRepository {
    title: string;
    buttonTitle: boolean;
    description?: string;
    url: string;
    func?: () => void;
}

export default function CardRepository({ 
    title, 
    description = 'Sem descrição',
    url,
    buttonTitle,
    func
}: IPropsCardRepository){
    return (
        <StyledCardRepository>
            <StyledCardTitle>
                <p>{title}</p>
                <hr />
            </StyledCardTitle>
            <StyledCardDescription>
                <p>{description}</p>
                <hr />
            </StyledCardDescription>
            <StyledContainerButton>
                <a href={url} target="_blank">
                    <Button 
                        title='Acessar repositório'
                        color='primary'
                        icon={<AiOutlineGithub />}
                    />
                </a>
                <Button 
                    title={buttonTitle ? 'Favoritar' : 'Desfavoritar'}
                    color='secondary'
                    icon={<AiOutlineHeart />}
                    click={func}
                />
            </StyledContainerButton>
        </StyledCardRepository>
    )
}