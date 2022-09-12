import { StyledCardsContainer } from './styled';
import Loading from '../Loading/Loading';
import CardRepository from '../CardRepository/CardRepository';

interface IRepository {
    name: string;
    description: string;
    html_url: string;
    message?: string;
}

interface IPropsCardContainer {
    fetching: boolean;
    isError: boolean;
    data: IRepository[];
    erro: any; 
}

export default function CardContainer({ 
    fetching,
    isError,
    erro,
    data
 }: IPropsCardContainer){

    if(fetching){
        return <Loading />
    }

    if(isError || erro){
        return <p>Nenhum repositório encontrado!</p>
    }

    return (
        <StyledCardsContainer>
            {data?.map((repo: IRepository, index: number) => {

                if(repo.message){
                    return <p>Nenhum repositório encontrado</p>
                }else{
                    return (
                        <CardRepository 
                            key={index}
                            title={repo?.name}
                            description={repo?.description}
                            url={repo?.html_url}
                        />
                    )
                }

            })}
        </StyledCardsContainer>
    )
}