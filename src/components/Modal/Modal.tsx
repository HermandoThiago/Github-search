import { useState, ChangeEvent, useEffect } from "react";
import {
  StyledContainerModal,
  StyledModal,
  StyledMessage,
  StyledContainerRepos,
  StyledContainerSearch,
} from "./style";
import { Input } from "../Input";
import { CardRepository } from "../CardRepository";
import { getStorage, removeStorage } from "../../utils/storage";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ICardRepository } from "../../interfaces";
import { Toaster } from "react-hot-toast";

interface IPropsModal {
  show: boolean;
  close: () => void;
}

export function Modal({ show, close }: IPropsModal) {
  const [search, setSearch] = useState<string>("");
  const [repositories, setRepositories] = useState<ICardRepository[]>([]);

  useEffect(() => {
    setRepositories(getStorage());
  }, [show]);

  const removeCard = (id: string): void => {
    removeStorage(id);
    setRepositories(getStorage());
  };

  const handleChangeSearch = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setSearch(e.target.value);

  const filterRepositories = repositories.filter((repo) =>
    repo.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <StyledContainerModal show={show}>
        <StyledModal>
          <StyledContainerSearch>
            <Input
              placeholder="Pesquisar repositórios"
              type="text"
              value={search}
              change={handleChangeSearch}
            />
            <AiOutlineCloseCircle onClick={close} />
          </StyledContainerSearch>
          <hr />
          <StyledContainerRepos>
            {filterRepositories.length === 0 ? (
              <StyledMessage>Nenhum repositório salvo.</StyledMessage>
            ) : (
              filterRepositories.map(
                ({ title, description, url, id }: ICardRepository) => {
                  return (
                    <CardRepository
                      key={id}
                      title={title}
                      buttonTitle={false}
                      description={description}
                      url={url}
                      func={() => removeCard(id!)}
                    />
                  );
                }
              )
            )}
          </StyledContainerRepos>
        </StyledModal>
      </StyledContainerModal>
    </>
  );
}
