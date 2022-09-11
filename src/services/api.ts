export async function getRepositories(name: string){
    const request = fetch(`https://api.github.com/users/${name}/repos`).then(response => response.json());
    return request;
}