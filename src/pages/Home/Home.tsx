import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { StyledAuthor } from "./styled";

export default function Home(){
    return (
        <>
            <Header>
                Github Search
            </Header>
            <Container>
            </Container>
            <Footer>
                Develop by @ 🎩 
                <StyledAuthor>Hermando Thiago</StyledAuthor>
            </Footer>
        </>
    );
};