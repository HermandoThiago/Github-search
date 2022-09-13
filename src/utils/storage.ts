import { toast } from 'react-hot-toast';

interface IPropsCardRepository {
    title: string;
    description?: string;
    url: string;
}

export function getStorage(){
    const data = localStorage.getItem("@repositories");
    if(data !== null){
        let repos = JSON.parse(data);
        return repos;
    }else{
        return [];
    }
}

export function insertStorage(_repo: IPropsCardRepository): void{
    const data = localStorage.getItem("@repositories");
    toast.success('Dados salvos com sucesso');
    if(data === null){
        localStorage.setItem("@repositories", JSON.stringify([_repo]));
    }else{
        let repos = JSON.parse(data);
        repos.push(_repo);
        localStorage.setItem("@repositories", JSON.stringify(repos));
    }

}