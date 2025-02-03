import { useState } from "react";
import AuthorFormModal from "../components/AuthorFormModal";
import '../assets/css/list-page.css'
import { Link } from "react-router-dom";

function BooksListPage() {

  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

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


      {isAuthorModalOpen && (
        <AuthorFormModal onClose={() => setIsAuthorModalOpen(false)} />
      )}
    </section>
  );
};

export default BooksListPage;