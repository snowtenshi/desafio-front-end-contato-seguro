import React, { useState } from 'react';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';
import BookFormModal from '../components/BookFormModal';
import AuthorFormModal from '../components/AuthorFormModal';

function Home() {

  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);

  return (
    <main className='home-container'>
      <div className='home-container__title'>
        <h1>Seja bem-vindo&#40;a&#41; Biblioteca Pública da Contato Seguro</h1>
        <p>v0.1</p>
      </div>

      <div className='button-container'>
        <Link to="/books">
          <button className='home-button'>Lista de Livros</button>
        </Link>        
        <Link to="/authors">
          <button className='home-button'>Lista de Autores</button>
        </Link>

        <button className='home-button' onClick={() => setIsBookModalOpen(true)}>Adicionar Livros</button>

        <button className='home-button' onClick={() => setIsAuthorModalOpen(true)}>Adicionar Autores</button>
      </div>

      {isBookModalOpen && (
        <BookFormModal onClose={() => setIsBookModalOpen(false)} />
      )}

      {isAuthorModalOpen && (
        <AuthorFormModal onClose={() => setIsAuthorModalOpen(false)} />
      )}

    </main>
  );
}

export default Home;