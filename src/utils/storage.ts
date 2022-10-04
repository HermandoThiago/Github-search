import { ICardRepository } from "~/interfaces";
import { toast } from "react-hot-toast";
import { v4 } from "uuid";

export function getStorage() {
  const data = localStorage.getItem("@repositories");
  if (data !== null) {
    let repos = JSON.parse(data);
    return repos;
  } else {
    return [];
  }
}

export function insertStorage(_repo: ICardRepository): void {
  const data = localStorage.getItem("@repositories");
  toast.success("Dados salvos com sucesso");
  if (data === null) {
    localStorage.setItem(
      "@repositories",
      JSON.stringify([{ ..._repo, id: v4() }])
    );
  } else {
    let repos = JSON.parse(data);
    repos.push({ ..._repo, id: v4() });
    localStorage.setItem("@repositories", JSON.stringify(repos));
  }
}

export function removeStorage(id: string): void {
  const data = localStorage.getItem("@repositories");
  let repos;

  if (data !== null) {
    repos = JSON.parse(data);
  } else {
    repos = [];
  }

  repos = repos.filter((repo: ICardRepository) => repo.id !== id);

  localStorage.setItem("@repositories", JSON.stringify(repos));
  toast.success("Repositório removido com sucesso");
}
