import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/list-page.css";
import "../assets/css/table.css";
import AuthorFormModal from "../components/AuthorFormModal";
import { Author } from "../types";

function AuthorsListPage() {
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    if (authors.length === 0) {
      const storedAuthors = localStorage.getItem("authors");
      if (storedAuthors) {
        setAuthors(JSON.parse(storedAuthors));
      }
    }
  }, [authors]);

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esse autor?"
    );
    if (!confirmDelete) return;

    const updatedAuthors = authors.filter((author) => author.id !== id);

    setAuthors(updatedAuthors);
    localStorage.setItem("authors", JSON.stringify(updatedAuthors));
  };

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

      {isAuthorModalOpen ? (
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
                  <th>Editar</th>
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
