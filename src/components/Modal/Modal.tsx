import { useState, ChangeEvent, useEffect } from 'react';
import { 
    StyledContainerModal, 
    StyledModal, 
    StyledMessage, 
    StyledContainerRepos,
    StyledContainerSearch 
} from './style';
import Input from '../Input/Input';
import CardRepository from '../../components/CardRepository/CardRepository';
import { getStorage, removeStorage } from '../../utils/storage';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { ICardRepository } from '../../interfaces/index';

interface IPropsModal {
    show: boolean;
    close: () => void;
}

export default function Modal({ show, close }: IPropsModal){
    const [search, setSearch] = useState<string>('');
    const [repositories, setRepositories] = useState([]);
    
    useEffect(() => {
        setRepositories(getStorage());
    }, [show]);

    const removeCard = (id: string): void => {
        removeStorage(id);
        setRepositories(getStorage());
    }
    
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSearch(e.target.value);

    return (
        <StyledContainerModal 
            show={show}
        >
            <StyledModal>
                <StyledContainerSearch>
                    <Input 
                        placeholder='Pesquisar repositórios'
                        type='text'
                        value={search}
                        change={handleChangeSearch}
                    />
                    <AiOutlineCloseCircle onClick={close} />
                </StyledContainerSearch>
                <hr />
                <StyledContainerRepos>
                    {repositories.length === 0 ? 
                        <StyledMessage>
                            Nenhum repositório salvo.
                        </StyledMessage> :
                    repositories.map(({ title, description, url, id }: ICardRepository) => {
                        return (
                            <CardRepository
                                key={id} 
                                title={title}
                                buttonTitle={false}
                                description={description}
                                url={url}
                                func={() => removeCard(id!)}
                            />
                        )
                    })}
                </StyledContainerRepos>
            </StyledModal>
        </StyledContainerModal>
    )
}