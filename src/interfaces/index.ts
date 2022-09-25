export interface IRepository {
    name: string;
    description: string;
    html_url: string;
    message?: string;
}

export interface ICardRepository {
    id?: string;
    title: string;
    description?: string;
    url: string;
}