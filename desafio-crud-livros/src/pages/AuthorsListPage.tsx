import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/list-page.css";
import "../assets/css/table.css";
import AuthorFormModal from "../components/AuthorFormModal";
import AuthorDetailsModal from "../components/AuthorDetailsModal";
import { Author } from "../types";

function AuthorsListPage() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const storedAuthors = localStorage.getItem("authors");
    if (storedAuthors) {
      setAuthors(JSON.parse(storedAuthors));
    }
  }, []);

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esse autor?"
    );
    if (!confirmDelete) return;

    const updatedAuthors = authors.filter((author) => author.id !== id);

    setAuthors(updatedAuthors);
    if (updatedAuthors) {
      localStorage.setItem("authors", JSON.stringify(updatedAuthors));
    } else {
      localStorage.removeItem("authors");
    }
  };

  const handleViewDetails = (author: Author) => {
    setSelectedAuthor(author);
    setIsDetailsOpen(true);
  }

  return (
    <section className="list-container">
      <div className="list-container__title">
        <h1>Lista de Autores</h1>
      </div>

      <div className="button-container">
        <button
          className="home-button"
          onClick={() => setIsAuthorModalOpen(true)}
        >
          Adicionar Autores
        </button>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
   
      {/**  
       * 
       * Aqui utiliza-se um ternário para verificar qual dos modais está aberto 
       * Caso o modal com os detalhes esteja aberto, o código omite a renderização
       * da tabela e do modal de adição de autor e assim por diante
       * 
       **/}

      {isDetailsOpen && selectedAuthor ? (
        <AuthorDetailsModal author={selectedAuthor} onClose={() => setIsDetailsOpen(false)} />
      ) : isAuthorModalOpen ? (
        <AuthorFormModal onClose={() => setIsAuthorModalOpen(false)} />
      ) : (
        <article className="list-container__table">
          {authors.length > 0 ? (
            <table className="list-container__table">
              <thead>
                <tr>
                  <th>ID do Autor</th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Deletar</th>
                  <th>Detalhes</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author) => (
                  <tr key={author.id}>
                    <td>{author.id}</td>
                    <td>{author.name}</td>
                    <td>{author.email || "N/A"}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(author.id)}
                      >
                        <span className="delete-icon">
                          <img
                            src="../src/assets/imgs/botao-apagar.png"
                            alt="botão de deletar"
                          />
                        </span>
                      </button>
                    </td>
                    <td>
                      <button className="details-button" onClick={() => handleViewDetails(author)}>Visualizar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="list-container__table-not-found">
              <img
                src="../src/assets/imgs/not-found.png"
                alt="Não encontrado"
              />
            </div>
          )}
        </article>
      )}
    </section>
  );
}

export default AuthorsListPage;
