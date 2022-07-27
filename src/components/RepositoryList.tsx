import { useEffect, useState } from "react";
import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";
// Com props podemos passar informações de um componente pai para um componente filho
// const repository = {
//   name: "unform",
//   description: "Unform React",
//   link: "https://github.com/unform/unform",
// };

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
  name: string,
  description: string,
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  // useEffect verifica se elgo mudou
  // O segundo paramentro podemos colocar uma variavel por exemplo e toda vez que mudar o useEffect irá nos avisar
  // Se não passarmos nada em um array ele será executado apenas uma vez
  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
