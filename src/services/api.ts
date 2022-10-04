import { toast } from "react-hot-toast";

export async function getRepositories(name: string) {
  const request = fetch(`https://api.github.com/users/${name}/repos`).then(
    (response) => response.json()
  );
  return request;
}

export const handleSearchRepositories = async (name: string) => {
  if (name.length === 0) {
    toast.error("O campo de busca não pode estar vázio");
    throw new Error("name vazio");
  }

  const response = await getRepositories(name);

  if (response.message) {
    if (response.message === "Not Found") {
      toast.error("Nenhum usuário encontrado");
    } else {
      toast.error("Número limite de pesquisas excedidas");
    }
    return [...response];
  }
  toast.success("Busca realizada com sucesso");
  return response;
};
