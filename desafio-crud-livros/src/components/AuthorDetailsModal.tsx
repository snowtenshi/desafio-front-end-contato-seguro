import React from 'react';
import '../assets/css/modal.css';
import { Author } from '../types';

interface AuthorDetailsModalProps {
  author: Author | null;
  onClose: () => void;
}

const AuthorDetailsModal: React.FC<AuthorDetailsModalProps> = ({ author, onClose }) => {

  if(!author) return null;

  return (
    <div className='modal-container'>
      <div className="modal-content">
        <h2 className='modal-content__title'>Detalhes do Autor</h2>
        <p className='modal-content__text'>ID do Autor: {author.id}</p>
        <p className='modal-content__text'>Nome do Autor: {author.name}</p>
        <p className='modal-content__text'>Email do Autor: {author.email || 'N/A'}</p>
        <button className='close-button' onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

export default AuthorDetailsModal;