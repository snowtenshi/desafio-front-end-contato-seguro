import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/list-page.css';
import '../assets/css/table.css';
import AuthorFormModal from "../components/AuthorFormModal";
import { Author } from "../types";

function BooksListPage() {

  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const storedAuthors = localStorage.getItem('authors');
    if(storedAuthors) {
      setAuthors(JSON.parse(storedAuthors));
    }
  }, []);

  return (
    <section className="list-container">
      <div className="list-container__title">
        <h1>Lista de Autores</h1>
      </div>
    
      <div className="button-container">
        <button className='home-button' onClick={() => setIsAuthorModalOpen(true)}>Adicionar Autores</button>
        <Link to='/'>
          <button>Voltar</button>
        </Link>
      </div>

      {authors.length > 0 ? (
        <table className="list-container__table">
          <thead>
            <tr>
              <th>ID do Autor</th>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
                <td>{author.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ): (
        <p>Nenhum autor cadastrado :&#40;</p>
      )}

      {isAuthorModalOpen && (
        <AuthorFormModal onClose={() => setIsAuthorModalOpen(false)} />
      )}
    </section>
  );
};

export default BooksListPage;