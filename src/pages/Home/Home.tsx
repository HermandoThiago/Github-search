import { ChangeEvent, useState } from "react";
import {
  Container,
  Header,
  Footer,
  Button,
  Input,
  CardContainer,
  Modal,
} from "../../components";
import { StyledAuthor, StyledSearchContainer } from "./styled";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { handleSearchRepositories } from "../../services/api";

export default function Home() {
  const [user, setUser] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);

  const { data, isFetching, refetch, isError, error } = useQuery(
    ["repositories"],
    () => handleSearchRepositories(user),
    {
      enabled: false,
      retry: false,
    }
  );

  const handleChangeUser = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setUser(e.target.value);
  const handleChangeModal = () => setModal(!modal);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Modal show={modal} close={handleChangeModal} />
      <Header>Github Search</Header>
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
}
