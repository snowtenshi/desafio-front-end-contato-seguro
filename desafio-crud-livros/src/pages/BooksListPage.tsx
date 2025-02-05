import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/list-page.css";
import "../assets/css/table.css";
import BookFormModal from "../components/BookFormModal";
import { Book } from "../types";

const BooksListPage: React.FC = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esse livro?"
    );
    if (!confirmDelete) return;

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <section className="list-container">
      <div className="list-container__title">
        <h1>Lista de Livros</h1>
      </div>

      <div className="button-container">
        <button
          className="home-button"
          onClick={() => setIsBookModalOpen(true)}
        >
          Adicionar Livros
        </button>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>

      {isBookModalOpen && (
        <BookFormModal onClose={() => setIsBookModalOpen(false)} />
      )}

      <article className="list-container__table">
        {books.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID do Livro</th>
                <th>Nome</th>
                <th>ID do Autor</th>
                <th>Nº de Páginas</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.name}</td>
                  <td>{book.authorId}</td>
                  <td>{book.pages || "N/A"}</td>
                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(book.id)}
                    >
                      <span className="delete-icon"><img src="../src/assets/imgs/botao-apagar.png" alt="botão de deletar" /></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="list-container__table-not-found">
            <img src="../src/assets/imgs/not-found.png" alt="Não encontrado" />
          </div>
        )}
      </article>
    </section>
  );
};

export default BooksListPage;
