import { useState } from "react";
import BookFormModal from "../components/BookFormModal";

function BooksListPage() {

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <section>
      <h1>Lista de Livros</h1>
    
      <div>
        <button className='home-button' onClick={() => setIsBookModalOpen(true)}>Adicionar Livros</button>
      </div>

      {isBookModalOpen && (
        <BookFormModal onClose={() => setIsBookModalOpen(false)} />
      )}
    </section>
  );
};

export default BooksListPage;