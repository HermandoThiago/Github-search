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
    description?: string;
    url: string;
}

export default function CardRepository({ 
    title, 
    description,
    url
}: IPropsCardRepository){
    return (
        <StyledCardRepository>
            <StyledCardTitle>
                <p>{title}</p>
                <hr />
            </StyledCardTitle>
            <StyledCardDescription>
                <p>{description ? description : 'Sem descrição'}</p>
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
                    title='Favoritar'
                    color='secondary'
                    icon={<AiOutlineHeart />}
                />
            </StyledContainerButton>
        </StyledCardRepository>
    )
}