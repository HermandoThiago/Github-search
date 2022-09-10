import React, { ChangeEvent, useState } from 'react';

import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CardRepository from "../../components/CardRepository/CardRepository";

import { StyledAuthor, StyledSearchContainer, StyledCardsContainer } from "./styled";

import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

import { getRepositories } from 'services/api';

interface IRepository {
    name: string
    description: string
    html_url: string
    language: string
    visibility: string
    stargazers_count: number
}

export default function Home(){
    const [user, setUser] = useState<string>('');
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    const handleChangeUser = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUser(e.target.value);

    const handleSearchRepositories = async () => {
        const response = await getRepositories(user);
        setRepositories(response);
        console.log(response);
    };

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
                        click={handleSearchRepositories}
                    />
                    <Button 
                        title="Favoritos"
                        color="secondary"
                        icon={<AiOutlineHeart />}
                    />      
                </StyledSearchContainer>
                <StyledCardsContainer>
                    {repositories.map((repo, index) => {
                        return (
                            <CardRepository
                                key={index} 
                                title={repo.name}
                                description={repo.description}
                                url={repo.html_url}
                            />
                        )
                    })}
                </StyledCardsContainer>
            </Container>
            <Footer>
                Develop by @ 🎩 
                <StyledAuthor>Hermando Thiago</StyledAuthor>
            </Footer>
        </>
    );
};