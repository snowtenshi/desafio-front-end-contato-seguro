import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/list-page.css';
import '../assets/css/table.css';
import BookFormModal from "../components/BookFormModal";
import { Book } from "../types";

const BooksListPage: React.FC = () => {

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if(storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  return (
    <section className="list-container">
      <div className="list-container__title">
        <h1>Lista de Livros</h1>
      </div>
    
      <div className='button-container'>
        <button className='home-button' onClick={() => setIsBookModalOpen(true)}>Adicionar Livros</button>
        <Link to='/'>
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
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.authorId}</td>
                <td>{book.pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ): (
        <p>Nenhum livro cadastrado :&#40;</p>
      )}
      </article>
    </section>
  );
};

export default BooksListPage;