import { StyledCardsContainer } from './styled';
import Loading from '../Loading/Loading';
import CardRepository from '../CardRepository/CardRepository';

interface IRepository {
    name: string;
    description: string;
    html_url: string;
}

interface IPropsCardContainer {
    loading: boolean;
    fetching: boolean;
    isError: boolean;
    data: IRepository[];
    erro: any; 
}

export default function CardContainer({ 
    loading,
    fetching,
    isError,
    erro,
    data
 }: IPropsCardContainer){

    if(loading || fetching){
        return <Loading />
    }

    if(isError || erro){
        return <p>Deu erro na sua chamada, tente novamente</p>
    }

    console.log('Data aquiiiiiii', data)

    return (
        <StyledCardsContainer>
            {data?.map((repo: IRepository, index: number) => {
                return (
                    <CardRepository 
                        key={index}
                        title={repo?.name}
                        description={repo?.description}
                        url={repo?.html_url}
                    />
                )
            })}
        </StyledCardsContainer>
    )
}