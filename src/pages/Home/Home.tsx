import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import CardRepository from "../../components/CardRepository/CardRepository";

import { StyledAuthor, StyledSearchContainer, StyledCardsContainer } from "./styled";

import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';

export default function Home(){
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
                    />
                    <Button 
                        title="Pesquisar"
                        color="primary"
                        icon={<AiOutlineSearch />}
                    />
                    <Button 
                        title="Favoritos"
                        color="secondary"
                        icon={<AiOutlineHeart />}
                    />      
                </StyledSearchContainer>
                <StyledCardsContainer>
                    <CardRepository 
                        title="Github-search"
                    />
                    <CardRepository 
                        title="Github-search"
                    />
                    <CardRepository 
                        title="Github-search"
                    />
                    <CardRepository 
                        title="Github-search"
                    />
                </StyledCardsContainer>
            </Container>
            <Footer>
                Develop by @ 🎩 
                <StyledAuthor>Hermando Thiago</StyledAuthor>
            </Footer>
        </>
    );
};