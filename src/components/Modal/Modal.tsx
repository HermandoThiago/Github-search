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

import { getStorage } from '../../utils/storage';

import { AiOutlineCloseCircle } from 'react-icons/ai';

interface IPropsModal {
    show: boolean;
    close: () => void;
}

interface IStorageRepository {
    title: string;
    description: string;
    url: string;
}

export default function Modal({ show, close }: IPropsModal){
    const [search, setSearch] = useState<string>('');
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        setRepositories(getStorage());
    }, [show]);
    
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
                    repositories.map((repo: IStorageRepository, index: number) => {
                        return (
                            <CardRepository
                                key={index} 
                                title={repo.title}
                                description={repo.description}
                                url={repo.url}
                            />
                        )
                    })}
                </StyledContainerRepos>
            </StyledModal>
        </StyledContainerModal>
    )
}