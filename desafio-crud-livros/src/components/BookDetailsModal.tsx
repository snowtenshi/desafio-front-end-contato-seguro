import React from 'react';
import '../assets/css/modal.css';
import { Book } from '../types';

interface BookDetailsModalProps {
  book: Book | null;
  onClose: () => void;
}

const BookDetailsModal: React.FC<BookDetailsModalProps> = ({ book, onClose }) => {

  if(!book) return null;

  return (
    <div className='modal-container'>
      <div className="modal-content">
        <h2 className='modal-content__title'>Detalhes do Livro</h2>
        <p className='modal-content__text'>ID do Livro: {book.id}</p>
        <p className='modal-content__text'>Nome do Livro: {book.name}</p>
        <p className='modal-content__text'>ID do Autor: {book.authorId}</p>
        <p className='modal-content__text'>Quantidade de Páginas: {book.pages || 'N/A'}</p>
        <button className='close-button' onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default BookDetailsModal;