import { useState } from "react";
import AuthorFormModal from "../components/AuthorFormModal";

function BooksListPage() {

  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  return (
    <section>
      <h1>Lista de Autores</h1>
    
      <div>
        <button className='home-button' onClick={() => setIsAuthorModalOpen(true)}>Adicionar Autores</button>
      </div>

      {isAuthorModalOpen && (
        <AuthorFormModal onClose={() => setIsAuthorModalOpen(false)} />
      )}
    </section>
  );
};

export default BooksListPage;