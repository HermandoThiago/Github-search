import { ChangeEvent, useState } from 'react';

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CardContainer from '../../components/CardContainer/CardContainer';

import { StyledAuthor, StyledSearchContainer } from "./styled";

import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { getRepositories } from 'services/api';
import { useQuery } from '@tanstack/react-query';


export default function Home(){
    const [user, setUser] = useState<string>('');

    const handleSearchRepositories = async (name: string) => {
        const response = await getRepositories(name);
        if(response.message){
            return [...response];
        }
        return response;
    };

    const { data, isLoading, isFetching, refetch, isError, error } = useQuery(['repositories'], () => handleSearchRepositories(user), {
        enabled: false,
    })

    const handleChangeUser = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUser(e.target.value);
    

    return (
        <>
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
                    />      
                </StyledSearchContainer>
                <CardContainer 
                    loading={isLoading}
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