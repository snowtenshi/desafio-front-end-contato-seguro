import { useState } from "react";
import BookFormModal from "../components/BookFormModal";
import '../assets/css/list-page.css';
import '../assets/css/global.css';
import { Link } from "react-router-dom";

function BooksListPage() {

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

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
    </section>
  );
};

export default BooksListPage;