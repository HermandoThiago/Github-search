import { StyledCardsContainer } from "./styled";
import { Loading } from "../Loading";
import { CardRepository } from "../CardRepository";
import { IRepository } from "../../interfaces";
import { insertStorage } from "../../utils/storage";

interface IPropsCardContainer {
  fetching: boolean;
  isError: boolean;
  data: IRepository[];
  erro: any;
}

export function CardContainer({
  fetching,
  isError,
  erro,
  data,
}: IPropsCardContainer) {
  if (fetching) {
    return <Loading />;
  }

  if (isError || erro) {
    return <p>Nenhum repositório encontrado!</p>;
  }

  return (
    <StyledCardsContainer>
      {data?.map((repo: IRepository, index: number) => {
        if (repo.message) {
          return <p>Nenhum repositório encontrado</p>;
        } else {
          const { name: title, description, html_url: url } = repo;

          return (
            <CardRepository
              key={index}
              title={title}
              buttonTitle
              description={description}
              url={url}
              func={() => insertStorage({ title, description, url })}
            />
          );
        }
      })}
    </StyledCardsContainer>
  );
}
