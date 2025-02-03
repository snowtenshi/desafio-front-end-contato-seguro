import React from 'react';
import '../assets/css/home.css'
import { Link } from 'react-router-dom';

function Home() {
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
        <Link to="/books-form">
          <button className='home-button'>Adicionar Livros</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;