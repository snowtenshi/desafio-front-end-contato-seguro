import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/list-page.css";
import "../assets/css/table.css";
import BookFormModal from "../components/BookFormModal";
import BookDetailsModal from "../components/BookDetailsModal";
import { Book } from "../types";

const BooksListPage: React.FC = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    if (books.length === 0) {
      const storedBooks = localStorage.getItem("books");
      if (storedBooks) {
        setBooks(JSON.parse(storedBooks));
      }
    }
  }, [books]);

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar esse livro?"
    );
    if (!confirmDelete) return;

    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
    if (updatedBooks.length === 0) {
      localStorage.setItem("books", JSON.stringify(updatedBooks));
    } else {
      localStorage.removeItem("books");
    }
  };

  const handleViewDetails = (book: Book) => {
    setSelectedBook(book);
    setIsDetailsOpen(true);
  }

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


      {/**  
       * 
       * Aqui utiliza-se um ternário para verificar qual dos modais está aberto 
       * Caso o modal com os detalhes esteja aberto, o código omite a renderização
       * da tabela e do modal de adição de livro e assim por diante
       * 
       **/}

      {isDetailsOpen && selectedBook ? (
        <BookDetailsModal book={selectedBook} onClose={() => setIsDetailsOpen(false)} />
      ) : isBookModalOpen ? (
        <BookFormModal onClose={() => setIsBookModalOpen(false)} />
      ) : (
        <article className="list-container__table">
          {books.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID do Livro</th>
                  <th>Nome</th>
                  <th>ID do Autor</th>
                  <th>Nº de Páginas</th>
                  <th>Deletar</th>
                  <th>Detalhes</th>
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
                        <span className="delete-icon">
                          <img
                            src="../src/assets/imgs/botao-apagar.png"
                            alt="botão de deletar"
                          />
                        </span>
                      </button>
                    </td>
                    <td>
                      <button className="details-button" onClick={() => handleViewDetails(book)}>Visualizar</button>
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
};

export default BooksListPage;
