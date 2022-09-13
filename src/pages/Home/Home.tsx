import { ChangeEvent, useState } from 'react';

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CardContainer from '../../components/CardContainer/CardContainer';
import Modal from '../../components/Modal/Modal';

import { StyledAuthor, StyledSearchContainer } from "./styled";

import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { getRepositories } from 'services/api';
import { useQuery } from '@tanstack/react-query';

import { Toaster, toast } from 'react-hot-toast';

export default function Home(){
    const [user, setUser] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);

    const handleSearchRepositories = async (name: string) => {
        const response = await getRepositories(name);

        if(name.length === 0){
            toast.error('O campo de busca não pode estar vázio');
            throw new Error('name vazio');
        }

        if(response.message){
            if(response.message === 'Not Found'){
                toast.error('Nenhum usuário encontrado');
            }else{
                toast.error('Número limite de pesquisas excedidas');
            }
            return [...response];
        }
        toast.success('Busca realizada com sucesso');
        return response;
    };

    const { data, isFetching, refetch, isError, error } = useQuery(['repositories'], () => handleSearchRepositories(user), {
        enabled: false,
    })

    const handleChangeUser = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUser(e.target.value);
    const handleChangeModal = () => setModal(!modal);

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Modal 
                show={modal}
                close={handleChangeModal}
            />
            <Header>
                Github Search
            </Header>
            <Container>
                <StyledSearchContainer>
                    <Input 
                        placeholder="Pesquise o usuário"
                        type="text"
                        value={user}
                        change={handleChangeUser}
                    />
                    <Button 
                        title="Pesquisar"
                        color="primary"
                        icon={<AiOutlineSearch />}
                        click={refetch}
                    />
                    <Button 
                        title="Favoritos"
                        color="secondary"
                        icon={<AiOutlineHeart />}
                        click={handleChangeModal}
                    />      
                </StyledSearchContainer>
                <CardContainer 
                    fetching={isFetching}
                    isError={isError}
                    data={data}
                    erro={error}
                />
            </Container>
            <Footer>
                Develop by @ 🎩 
                <StyledAuthor>Hermando Thiago</StyledAuthor>
            </Footer>
        </>
    );
};